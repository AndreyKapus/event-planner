import {useEvents} from '../../Store/EventsStore.js'
import GoBackBtn from '../GoBack/GoBack.js';
import {EventPageErapper,
        EventTitle,
        Image,
        EventWrapper,
        DescriptionWrapper,
        DescriptionText,
        DetailsList,
        DetailsItem,
        EventTime,
} from './Event.styled'
import defaultImage from '../../Images/default2.jpg'

const Event = () => {
    const events = useEvents(state => state.events);

    return (
        <EventPageErapper>
            <GoBackBtn/>
            {events && events.map((event) => (
                <div key={event.id}>
                    <EventTitle>{event.title}</EventTitle>
                    <EventWrapper>
                        <Image>
                            <img src={defaultImage} alt='default'/>
                        </Image>
                        <DescriptionWrapper>
                            <DescriptionText>{event.description}</DescriptionText>
                            <DetailsList>
                                <DetailsItem>{event.category}</DetailsItem>
                                <DetailsItem>{event.priority}</DetailsItem>
                                <DetailsItem>{event.location}</DetailsItem>
                            </DetailsList>
                                <EventTime>{event.date} at {event.time}</EventTime> 
                        </DescriptionWrapper>
                    </EventWrapper>
                </div>
            ))}
        </EventPageErapper>
    )
};

export default Event;