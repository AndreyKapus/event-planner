import { useState } from "react";
import { useEvents } from "../../Store/EventsStore";
import { CreateEventWrapper,
        Form,
        CreateEventTitle,
        FormLabel,
        FormInput,
        AddBtn,
    } from "./CreateEvent.styled";


const CreateEventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState('');
    const [priority, setPriority] = useState('');

    const add = useEvents((state) => state.addEvent);

    const handleChange = (e) => {
        const {name, value} = e.target;

        switch(name) {
            case 'title':
                setTitle(value);
            break;
            case 'description':
                setDescription(value);
            break;
            case 'date':
                setDate(value);
            break;
            case 'time':
                setTime(value);
            break;
            case 'location':
                setLocation(value);
            break;
            case 'category':
                setCategory(value);
            break;
            case 'picture':
                setPicture(value);
            break;
            case 'priority':
                setPriority(value);
            break;

            default: return
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {title, description, date, time, location, category, picture, priority}
        add(event)
    }

    return(
        <CreateEventWrapper>
            <CreateEventTitle>Create new event</CreateEventTitle>
            <Form onSubmit={handleSubmit}>
                <FormLabel for='title'>Title</FormLabel>
                <FormInput type='text' name="title" id='title' onChange={handleChange}/>

                <FormLabel for='description'>Description</FormLabel>
                <FormInput type='text' name="description" id='description' desc onChange={handleChange}/>

                <FormLabel for='date'>Select date</FormLabel>
                <FormInput type='text' name="date" id="date" onChange={handleChange}/>

                <FormLabel for='time'>Select time</FormLabel>
                <FormInput type='text' name="time" id="time" onChange={handleChange}/>

                <FormLabel for='location'>Location</FormLabel>
                <FormInput type='text' name="location" id="location" onChange={handleChange}/>

                <FormLabel for='category'>Category</FormLabel>
                <FormInput type='text'name="category" id="category" onChange={handleChange}/>

                <FormLabel for='picture'>Set picture</FormLabel>
                <FormInput type='text' name="picture" id="picture" onChange={handleChange}/>

                <FormLabel for='priority'>Priority</FormLabel>  
                <FormInput type='text' name="priority" id="priority" onChange={handleChange}/>  

                <AddBtn type="submit" >Add event</AddBtn> 
            </Form>
        </CreateEventWrapper>
    )
};

export default CreateEventForm;
