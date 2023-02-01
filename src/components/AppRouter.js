import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/HomePage/Home";
import PocaRan from "../routes/PocaRanPage/PocaRan";
import { Cau } from "../routes/CAU8Page/Cau";
import EventRan from "../routes/EventRanPage/EventRan";


const AppRouter = () => {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/PocaRan" element = {<PocaRan/>}/>
            <Route path = "/EventRan" element = {<EventRan/>}/>
            <Route path = "/Cau" element = {<Cau/>}/>
          </Routes>
      </Router>
  )
}

export default AppRouter;