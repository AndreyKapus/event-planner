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
        MoreInfoBtn,
} from './EventList.styled.js';
import defaultImg from '../../Images/defaultImg.jpg';

const EventsList = () => {
    const events = useEvents(state => state.events);

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <ul>
            {events && events.map(({id, date, time, location, category, priority, title,description}) => (
                    <EventCard key={id}>
                        <ImgWrapper className='imageWrapper'>
                            <img src={defaultImg} alt='default-pic'/>
                            <MeetInfoWrapper className='MeetInfoWrapper'>
                                <MeetTimeWrapper>
                                    <MeetDate>{date}</MeetDate>
                                    <MeetTime>at {time}</MeetTime>
                                </MeetTimeWrapper>
                                <MeetLocation>{location}</MeetLocation>
                            </MeetInfoWrapper>
                        </ImgWrapper>
                        <EventDescrWrapper className='EventDescrWrapper'>
                            <EventTitle>{title}</EventTitle>
                            <EventText>{description}</EventText>
                        </EventDescrWrapper>
                        <StickersWrapper>
                            <Sticker>{category}</Sticker>
                            <Sticker>{priority}</Sticker>
                        </StickersWrapper>

                        <MoreInfoBtn className='more' type='button'>More info</MoreInfoBtn>
                    </EventCard>
            ))}
            </ul>
        </EventSection>
    )
};

export default EventsList;