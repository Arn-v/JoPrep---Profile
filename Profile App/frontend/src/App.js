import React from "react";
import ProfilePage from "./Pages/ProfilePage";
import { Route , Routes } from "react-router-dom"; 
import "./index.css"

const App = () => {
  return(
    <div>

      <Routes>
         <Route path="/" element={ <ProfilePage/> } />
      </Routes>

    </div>
  ) 
};

export default App;
