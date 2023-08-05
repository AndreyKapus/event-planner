import CreateEventForm from "../../Components/CreateEventForm/CreateEventForm";
import { useNavigate } from 'react-router-dom';

const CreateEventPage = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <>
            <CreateEventForm goBack={goBack}/>
        </>
    )
};

export default CreateEventPage;