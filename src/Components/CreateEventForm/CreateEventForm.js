import { useState } from "react";
import { useEvents } from "../../Store/EventsStore";


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
        <>
            <form onSubmit={handleSubmit}>
                <label>Title
                    <input type='text' name="title" onChange={handleChange}/>
                </label>

                <label>Description
                    <input type='text' name="description" onChange={handleChange}/>
                </label>

                <label>Select date
                    <input type='text' name="date" onChange={handleChange}/>
                </label>

                <label>Select time
                    <input type='text' name="time" onChange={handleChange}/>
                </label>

                <label>Location
                    <input type='text' name="location" onChange={handleChange}/>
                </label>

                <label>Category
                    <input type='text'name="category" onChange={handleChange}/>
                </label>

                <label>Set picture
                    <input type='text' name="picture" onChange={handleChange}/>
                </label>

                <label>Priority
                    <input type='text' name="priority" onChange={handleChange}/>
                </label>    

                <button type="submit" >Add event</button> 
            </form>
        </>
    )
};

export default CreateEventForm;


// const initialState = {
//     title: '',
//     description: '',
//     date: '',
//     time: '',
//     location: '',
//     category: '',
//     picture: '',
//     priority: '',
// }
