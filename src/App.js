import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import EventPage from './Pages/EventPage/EventPage'
import CreateEventPage from "./Pages/CreateEventPage/CreateEventPage";
import Header from "./Components/Header/Header";
import { Container } from "./Styles/GlobalStyles";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<MainPage/>}/>
          <Route path="event" element={<EventPage/>}/>
          <Route path="add" element={<CreateEventPage/>}/>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
