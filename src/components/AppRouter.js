import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/HomePage/Home";
import PocaRan from "../routes/PocaRanPage/PocaRan";


const AppRouter = () => {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/PocaRan" element = {<PocaRan/>}/>
          </Routes>
      </Router>
  )
}

export default AppRouter;