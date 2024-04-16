import { Route, Routes } from "react-router-dom";
// import Todo from "./components/Todo";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="" element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new" element={<NewMeetups />} />
      </Routes>
    </div>

    //  <div>
    //   <h1>
    //     My Todos
    //   </h1>
    //     <Todo text="one"/>
    //     <Todo text="two"/>
    //  </div>
  );
}

export default App;
