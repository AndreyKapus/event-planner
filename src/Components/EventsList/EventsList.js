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

const EventsList = () => {
    const events = useEvents(state => state.events);
    const setEventId = useId((state) => state.setId);
    const getCategory = useFilter(state => state.filter);

    const handleEventDetails = (id) => {
        setEventId(id);
        // setInitialId()
    };

    const filteredEvents = getCategory !== '' ? 
    events.filter(event => event.category === getCategory) : events
    
    function pad (value) {
        return String(value).padStart(2, '0')
    };

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <EventList>
            {events && filteredEvents.map((event) => (
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