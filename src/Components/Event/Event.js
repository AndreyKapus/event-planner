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
import { useNavigate } from 'react-router-dom';

const Event = () => {
    let singleEvent = {}
    const events = useEvents((state) => state.events);
    const id = useId(state => state.id);
    const deletEv = useEvents((state) => state.deleteEvent);

    const navigate = useNavigate();
    
    if(events && id) {
       const event = events.find(ev => ev.id === id);
       singleEvent = event
    };

    const handleDelete = (id) => {
        deletEv(id);
        navigate(-1)
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