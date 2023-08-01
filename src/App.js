import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import FormPage from "./Pages/FormPage/FormPage";
import EventPage from './Pages/EventPage/EventPage'
import CreateEventPage from "./Pages/CreateEventPage/CreateEventPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/event" element={<EventPage/>}/>
        <Route path="/add" element={<CreateEventPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
