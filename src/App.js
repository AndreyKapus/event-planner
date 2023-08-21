import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import EventPage from './Pages/EventPage/EventPage'
import CreateEventPage from "./Pages/CreateEventPage/CreateEventPage";
import Header from "./Components/Header/Header";
import { useEffect } from "react";
import { Container } from "./App.styled";
import {HeaderContainer, ContainerWrapper} from './App.styled'

function App() {
  useEffect(() => {
    document.title = "Event planner";
  }, []);
  
  return (
    <div>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      
      <ContainerWrapper>
        <Container>
          <Routes>
              <Route index element={<MainPage/>}/>
              <Route path="event" element={<EventPage/>}/>
              <Route path="add" element={<CreateEventPage/>}/>  
          </Routes>
        </Container>
      </ContainerWrapper>
    </div>
  );
}

export default App;
