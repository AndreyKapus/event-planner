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

const EventsList = () => {
    const events = useEvents(state => state.events);
    const setEventId = useId((state) => state.setId);

    // const evDate = events.startDate.getDate();
    // console.log(evDate)

    const handleEventDetails = (id) => {
        setEventId(id);
        // setInitialId()
    };

    console.log(events)

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <EventList>
            {events && events.map((event) => (
                    <EventCard key={event.id}>
                        <ImgWrapper className='imageWrapper'>
                            <img src={defaultImg} alt='default'/>
                            <MeetInfoWrapper className='MeetInfoWrapper'>
                                <MeetTimeWrapper>
                                    <MeetDate>{event.date}</MeetDate>
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
                            <Sticker>{event.priority}</Sticker>
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