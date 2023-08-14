import { useState } from "react";
import { useEvents } from "../../Store/EventsStore";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import parseISO from 'date-fns/parseISO'
import "react-datepicker/dist/react-datepicker.css";
import SelectDown from '../../Icons/SelectDown'
import { CreateEventWrapper,
        Form,
        CreateEventTitle,
        FormLabel,
        FormInput,
        AddBtn,
        Textarea,
        DatePickerWrapper,
    } from "./CreateEvent.styled";
import GoBackBtn from "../GoBack/GoBack";




const CreateEventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState('');
    const [priority, setPriority] = useState('');
    const [startDate, setStartDate] = useState(null);

    const navigate = useNavigate();

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
            // case 'date':
            //     setDate(value);
            // break;
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const event = {title, description, startDate, time, location, category, picture, priority};
        add(event);
        navigate(-1);
    };

    return(
        <CreateEventWrapper>
            <GoBackBtn/>
            <CreateEventTitle>Create new event</CreateEventTitle>
            <Form onSubmit={handleSubmit}>
                    <div className="title">
                        <FormLabel htmlForfor='title'>Title</FormLabel>
                        <FormInput type='text' name="title" id='title' onChange={handleChange}/>
                    </div>

                    <div className="description">
                        <FormLabel htmlForfor='description'>Description</FormLabel>
                        <Textarea type='text' name="description" id='description' desc onChange={handleChange}/>
                    </div>

                    <DatePickerWrapper className="date">
                        <FormLabel htmlForfor='date'>Select date</FormLabel>
                        {/* <FormInput type='text' name="date" id="date" onChange={handleChange}/> */}
                        <DatePicker className="date-picker" 
                            name='date'
                            id="date"
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select date"
                            />
                        <SelectDown/>
                    </DatePickerWrapper>

                    <div className="time">
                        <FormLabel htmlForfor='time' >Select time</FormLabel>
                        <FormInput type='time' name="time" id="time" onChange={handleChange}/>
                    </div>

                    <div className="location">
                        <FormLabel htmlForfor='location'>Location</FormLabel>
                        <FormInput type='text' name="location" id="location" onChange={handleChange}/>
                    </div>

                    <div className="category">
                        <FormLabel htmlForfor='category'>Category</FormLabel>
                        <FormInput type='text'name="category" id="category" onChange={handleChange}/>
                    </div>

                    <div className="picture">
                        <FormLabel  htmlForfor='picture'>Add picture</FormLabel>
                        <FormInput disabled type='text' name="picture" id="picture" onChange={handleChange}/>
                    </div>

                    <div className="priority">
                        <FormLabel htmlForfor='priority'>Priority</FormLabel>  
                        <FormInput type='text' name="priority" id="priority" onChange={handleChange}/>   
                    </div>

                    <AddBtn type="submit" className="addBtn">Add event</AddBtn>
            </Form>
        </CreateEventWrapper>
    )
};

export default CreateEventForm;
