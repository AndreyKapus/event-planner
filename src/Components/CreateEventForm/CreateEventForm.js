import { useState } from "react";
import { useEvents } from "../../Store/EventsStore";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectDown from "../../Icons/SelectDown";
import {
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
import { useTranslation } from "react-i18next";
import avatarImages from "../../Colections/AvatarImages";

const CreateEventForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState(avatarImages.art);
  const [priority, setPriority] = useState("");
  const [startDate, setStartDate] = useState(null);

  const { t } = useTranslation();

  const navigate = useNavigate();

  const add = useEvents((state) => state.addEvent);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "time":
        setTime(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "priority":
        setPriority(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      description,
      startDate,
      time,
      location,
      category,
      picture,
      priority,
    };
    add(event);
    navigate(-1);
  };

  return (
    <div>
      <GoBackBtn />
      <CreateEventTitle>{t("create-event")}</CreateEventTitle>
      <Form onSubmit={handleSubmit}>
        <div className="title">
          <FormLabel htmlFor="title">{t("create-event-title")}</FormLabel>
          <FormInput
            required
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </div>

        <div className="description">
          <FormLabel htmlFor="description">
            {t("create-event-description")}
          </FormLabel>
          <Textarea
            type="text"
            name="description"
            id="description"
            desc
            onChange={handleChange}
          />
        </div>

        <DatePickerWrapper className="date">
          <FormLabel htmlFor="date">{t("create-event-date")}</FormLabel>
          <DatePicker
            className="date-picker"
            calendarClassName="calendar"
            autocomplete="off"
            dateFormat="yyyy/MM/dd"
            placeholderText={t("select-date")}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <SelectDown />
        </DatePickerWrapper>

        <DatePickerWrapper className="time">
          <FormLabel htmlFor="time">{t("create-event-time")}</FormLabel>
          <FormInput
            type="time"
            name="time"
            id="time"
            onChange={handleChange}
          />
          <SelectDown />
        </DatePickerWrapper>

        <div className="location">
          <FormLabel htmlFor="location">{t("create-event-location")}</FormLabel>
          <FormInput
            required
            type="text"
            name="location"
            id="location"
            onChange={handleChange}
          />
        </div>

        <div className="category">
          <CategoryDrop setCategory={setCategory} handleChange={handleChange} />
        </div>

        <div className="picture">
          <ImageDownload handleChange={handleChange} setPicture={setPicture} />
        </div>

        <div className="priority">
          <PriorityDrop priority={priority} setPriority={setPriority} />
        </div>

        <AddBtn type="submit" className="addBtn">
          {t("create-event-btn")}
        </AddBtn>
      </Form>
    </div>
  );
};

export default CreateEventForm;
