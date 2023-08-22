import {useEvents} from '../../Store/EventsStore.js'
import { useId } from '../../Store/EventsStore.js';
import { EventCard,
        EventSection, 
        EventListTittle,
        Sticker,
        StickersWrapper,
        MeetInfoWrapper,
        ImgWrapper,
        MeetTimeWrapper,
        MeetDate,
        MeetTime,
        MeetLocation,
        EventDescrWrapper,
        EventTitle,
        EventText,
        MoreInfoBtn,
        EventList,
} from './EventList.styled.js';
import defaultImg from '../../Images/flowers.jpg';
import { useFilter } from '../../Store/FileterStore.js';
import { useSearch } from '../../Store/SearchStore.js';
import { useEffect, useState } from 'react';

const EventsList = () => {
    const events = useEvents(state => state.events);
    const setEventId = useId((state) => state.setId);
    const getCategory = useFilter(state => state.filter);
    const searchInputValue = useSearch(state => state.searchValue);
    const [filter, setFilter] = useState([])

    const handleEventDetails = (id) => {
        setEventId(id);
    };

    useEffect(() => {
        if(getCategory !== '') {
            const changeFilter = () => {
                const filtredElement = events.filter(event => event.category === getCategory);
                setFilter(filtredElement);     
            };
            changeFilter()
            return;
        };

        if(searchInputValue !== '') {
           const changeSearch = () => {
            const searchedEv = filter.filter(event => event.title.toLowerCase().includes(searchInputValue.toLowerCase()))
            setFilter(searchedEv)
           };
           changeSearch()
            return;
        };

        setFilter(events)
    }, [events, getCategory, searchInputValue]) // eslint-disable-line react-hooks/exhaustive-deps

    
    function pad (value) {
        return String(value).padStart(2, '0')
    };

    console.log(events)

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <EventList>
            {events && filter.map((event) => (
                    <EventCard key={event.id}>
                        <ImgWrapper className='imageWrapper'>
                            <img src={defaultImg} alt='default'/>
                            <MeetInfoWrapper className='MeetInfoWrapper'>
                                <MeetTimeWrapper>
                                    <MeetDate>{pad(event.date)}.{pad(event.year)}</MeetDate>
                                    <MeetTime>at {event.time}</MeetTime>
                                </MeetTimeWrapper>
                                <MeetLocation>{event.location}</MeetLocation>
                            </MeetInfoWrapper>
                        </ImgWrapper>
                        <EventDescrWrapper className='EventDescrWrapper'>
                            <EventTitle>{event.title}</EventTitle>
                            <EventText>{event.description}</EventText>
                        </EventDescrWrapper>
                        <StickersWrapper>
                            <Sticker>{event.category}</Sticker>
                            <Sticker priority={event.priority}>{event.priority}</Sticker>
                        </StickersWrapper>

                        <MoreInfoBtn 
                            to='/event' 
                            className='more' 
                            type='button' 
                            onClick={() => handleEventDetails(event.id)}>
                            More info
                        </MoreInfoBtn>
                    </EventCard>
            ))}
            </EventList>
        </EventSection>
    )
};

export default EventsList;