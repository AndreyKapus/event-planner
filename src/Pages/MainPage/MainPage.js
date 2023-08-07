import Controls from "../../Components/Controls/Controls";
import EventsList from "../../Components/EventsList/EventsList";
import {MainPageContainer} from './MainPage.styled'

const MainPage = () => {
    return (
        <MainPageContainer>
            <Controls/>
            <EventsList/>
        </MainPageContainer>
    )
};

export default MainPage;