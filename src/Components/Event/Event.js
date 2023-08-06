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
import { useState } from 'react';

const Event = () => {
    let singleEvent = {}
    // const [singleEvent, setSingleEvent] = useState({})
    const events = useEvents((state) => state.events);
    const id = useId(state => state.id);
    
    
    if(events && id) {
       const event = events.find(ev => ev.id === id);
 
       singleEvent = event
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
                    </EventWrapper>
                </div>}
        </EventPageErapper>
    )
};

export default Event;