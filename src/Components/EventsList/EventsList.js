import {useEvents} from '../../Store/EventsStore.js'
import { EventCard,
        EventSection, 
        EventListTittle,
} from './EventList.styled.js';

const EventsList = () => {
    const events = useEvents(state => state.events)

    return (
        <EventSection>
            <EventListTittle>My events</EventListTittle>
            <EventCard>
            {events && events.map((event) => (
                <li key={event.id}>
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                    <p>{event.category}</p>
                    <p>{event.priority}</p>
                </li>
            ))}
            </EventCard>
        </EventSection>
    )
};

export default EventsList;