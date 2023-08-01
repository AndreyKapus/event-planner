import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import FormPage from "./Pages/FormPage/FormPage";
import EventPage from './Pages/EventPage/EventPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/event" element={<EventPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
