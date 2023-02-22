import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/HomePage/Home";
import PocaRan from "../routes/PocaRanPage/PocaRan";
import  EventRan  from "../routes/EventRanPage/EventRan";


const AppRouter = () => {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/PocaRan" element = {<PocaRan/>}/>
            <Route path = "/EventRan" element = {<EventRan/>}/>
          </Routes>
      </Router>
  )
}

export default AppRouter;