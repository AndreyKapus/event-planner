import Controls from "../../Components/Controls/Controls";
import EventsList from "../../Components/EventsList/EventsList";
import Header from "../../Components/Header/Header";
import {MainContainer} from './MainPage.styled'

const MainPage = () => {
    return (
        <div>
            <Controls/>
            <EventsList/>
        </div>
    )
};

export default MainPage;