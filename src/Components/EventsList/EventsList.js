import {useEvents} from '../../Store/EventsStore.js'
import { EventCard,
        EventSection, 
        EventListTittle,
        Category,
} from './EventList.styled.js';
import defaultImg from '../../Images/defaultImg.jpg';


const EventsList = () => {
    const events = useEvents(state => state.events)

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <ul>
            {events && events.map((event) => (
                <EventCard key={event.id}>
                    <img src={defaultImg} alt='default-pic'/>
                        <Category>{event.category}</Category>
                        <p>{event.priority}</p>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.location}</p>
                        <p>{event.title}</p>
                        <p>{event.description}</p>
                    </EventCard>
            ))}
            </ul>
        </EventSection>
    )
};

export default EventsList;