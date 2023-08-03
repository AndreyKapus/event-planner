import {useEvents} from '../../Store/EventsStore.js'

const Event = () => {
    const events = useEvents(state => state.events)

    return (
        <section>
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
        </section>
    )
};

export default Event;