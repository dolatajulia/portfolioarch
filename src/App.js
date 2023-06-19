import Homepage from "./Components/Homepage";
import ChildrensHouse from "./Components/Projects/ChildrensHouse";
import SocialHousing from "./Components/Projects/SocialHousing";
import ClimbingCenter from "./Components/Projects/ClimbingCenter";
import Coliving from "./Components/Projects/Coliving";
import RakosPatak from "./Components/Projects/RakosPatak";

import "./App.css";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <BrowserRouter basename={"/portfolioarch"}>
        <Routes location={location} key={location.key}>
          <Route exact path="/portfolioarch" element={<Homepage />} />
          <Route path="/childrenshouse" element={<ChildrensHouse />} />
          <Route path="/socialhousing" element={<SocialHousing />} />
          <Route path="/climbingcenter" element={<ClimbingCenter />} />
          <Route path="/coliving" element={<Coliving />} />
          <Route path="/rakospatak" element={<RakosPatak />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
