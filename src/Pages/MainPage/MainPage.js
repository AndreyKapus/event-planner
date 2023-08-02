import Controls from "../../Components/Controls/Controls";
import EventsList from "../../Components/EventsList/EventsList";
import Header from "../../Components/Header/Header";
import {MainContainer} from './MainPage.styled'

const MainPage = () => {
    return (
        <MainContainer>
            <Header/>
            <Controls/>
            <EventsList/>
        </MainContainer>
    )
};

export default MainPage;