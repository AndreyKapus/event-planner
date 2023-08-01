import {useEvents} from '../../Store/EventsStore.js'

const EventsList = () => {
    const events = useEvents(state => state.events)
    console.log(events)
    return (
        <>
            <h2>My events</h2>
            {events && events.map((event) => (
                <div key={event.id}>
                    <p>{event.id}</p>
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.priority}</p>
                </div>
            ))}
        </>
    )
};

export default EventsList;