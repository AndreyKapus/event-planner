import { useState } from "react";
import { useEvents } from "../../Store/EventsStore";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
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
import PriorityDrop from "./PriorityDrop";
import CategoryDrop from "./CategoryDrop";
import ImageDownload from "./ImageDownload";
import defaultImage from '../../Images/defaultImg.jpg'

const CreateEventForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [picture, setPicture] = useState(defaultImage);
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
            case 'time':
                setTime(value);
            break;
            case 'location':
                setLocation(value);
            break;
            case 'category':
                setCategory(value);
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
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <FormInput type='text' name="title" id='title' onChange={handleChange}/>
                    </div>

                    <div className="description">
                        <FormLabel htmlFor='description'>Description</FormLabel>
                        <Textarea type='text' name="description" id='description' desc onChange={handleChange}/>
                    </div>

                    <DatePickerWrapper className="date">
                        <FormLabel htmlFor='date'>Select date</FormLabel>
                        <DatePicker className="date-picker"
                            calendarClassName="calendar" 
                            autocomplete="off"
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select date"
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            />
                        <SelectDown/>
                    </DatePickerWrapper>

                    <DatePickerWrapper className="time">
                        <FormLabel htmlFor='time' >Select time</FormLabel>
                        <FormInput type='time' name="time" id="time" onChange={handleChange}/>
                        <SelectDown/>
                    </DatePickerWrapper>

                    <div className="location">
                        <FormLabel htmlFor='location'>Location</FormLabel>
                        <FormInput type='text' name="location" id="location" onChange={handleChange}/>
                    </div>

                    <div className="category">
                        <CategoryDrop setCategory={setCategory} handleChange={handleChange}/>
                    </div>

                    <div className="picture">
                        <ImageDownload handleChange={handleChange} setPicture={setPicture}/>
                        {/* <FormLabel  htmlFor='picture'>Add picture</FormLabel>
                        <FormInput disabled type='text' name="picture" id="picture" onChange={handleChange}/> */}
                    </div>

                    <div className="priority">
                        <PriorityDrop priority={priority} setPriority={setPriority}/>
                    </div>

                    <AddBtn type="submit" className="addBtn">Add event</AddBtn>
            </Form>
        </CreateEventWrapper>
    )
};

export default CreateEventForm;
