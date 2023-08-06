import {useEvents} from '../../Store/EventsStore.js'
import { useId } from '../../Store/EventsStore.js';
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
    let singleEvent = {}
    const events = useEvents((state) => state.events);
    const id = useId(state => state.id);
    const deletEv = useEvents((state) => state.deleteEvent);
    
    if(events && id) {
       const event = events.find(ev => ev.id === id);
       singleEvent = event
    };

    const handleDelete = (id) => {
        console.log(id)
        deletEv(id)
      };

  
    return (
        <EventPageErapper>
           <GoBackBtn/>
           {singleEvent && 
                <div key={singleEvent.id}>
                    <EventTitle>{singleEvent.title}</EventTitle>
                    <EventWrapper>
                        <Image>
                            <img src={defaultImage} alt='default'/>
                        </Image>
                        <DescriptionWrapper>
                            <DescriptionText>{singleEvent.description}</DescriptionText>
                            <DetailsList>
                                <DetailsItem>{singleEvent.category}</DetailsItem>
                                <DetailsItem>{singleEvent.priority}</DetailsItem>
                                <DetailsItem>{singleEvent.location}</DetailsItem>
                            </DetailsList>
                                <EventTime>{singleEvent.date} at {singleEvent.time}</EventTime> 
                        </DescriptionWrapper>
                        <button type='button' onClick={() => handleDelete(singleEvent.id)}>delete event</button>
                    </EventWrapper>
                </div>}
        </EventPageErapper>
    )
};

export default Event;