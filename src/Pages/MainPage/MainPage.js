import Controls from "../../Components/Controls/Controls";
import EventsList from "../../Components/EventsList/EventsList";
import { Container } from "./MainPage.styled";

const MainPage = () => {
    return (
        <div>
            <Controls/>
            <EventsList/>
        </div>
    )
};

export default MainPage;