import {useEvents} from '../../Store/EventsStore.js'
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
} from './EventList.styled.js';
import defaultImg from '../../Images/defaultImg.jpg';


const EventsList = () => {
    const events = useEvents(state => state.events)

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <ul>
            {events && events.map(({id, date, time, location, category, priority, title,description}) => (
                    <EventCard key={id}>
                        <ImgWrapper>
                            <img src={defaultImg} alt='default-pic'/>
                            <MeetInfoWrapper>
                                <MeetTimeWrapper>
                                    <MeetDate>{date}</MeetDate>
                                    <MeetTime>at {time}</MeetTime>
                                </MeetTimeWrapper>
                                <MeetLocation>{location}</MeetLocation>
                            </MeetInfoWrapper>
                        </ImgWrapper>
                        <StickersWrapper>
                            <Sticker>{category}</Sticker>
                            <Sticker>{priority}</Sticker>
                        </StickersWrapper>
                        <EventDescrWrapper>
                            <EventTitle>{title}</EventTitle>
                            <EventText>{description}</EventText>
                        </EventDescrWrapper>
                    </EventCard>
            ))}
            </ul>
        </EventSection>
    )
};

export default EventsList;