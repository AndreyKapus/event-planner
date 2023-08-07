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
        EventContainer,
        DescriptionContainer,
        ControlsWrapper,
        DeleteEventBtn,
} from './Event.styled'
import defaultImage from '../../Images/flowers-ultra.jpg'
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
                <EventContainer key={singleEvent.id}>
                    <EventTitle>{singleEvent.title}</EventTitle>
                    <EventWrapper>
                        <Image>
                            <img src={defaultImage} alt='default'/>
                        </Image>
                       <ControlsWrapper>
                            <DescriptionWrapper>
                                <DescriptionText>{singleEvent.description}</DescriptionText>
                                <DescriptionContainer>
                                    <DetailsList>
                                        <DetailsItem>{singleEvent.category}</DetailsItem>
                                        <DetailsItem>{singleEvent.priority}</DetailsItem>
                                        <DetailsItem>{singleEvent.location}</DetailsItem>
                                        <DetailsItem>{singleEvent.date} at {singleEvent.time}</DetailsItem> 
                                    </DetailsList>
                                </DescriptionContainer>
                            </DescriptionWrapper>
                            <DeleteEventBtn type='button' onClick={() => handleDelete(singleEvent.id)}>Delete event</DeleteEventBtn>
                       </ControlsWrapper>
                       
                    </EventWrapper>
                </EventContainer>
                }
        </EventPageErapper>
    )
};

export default Event;