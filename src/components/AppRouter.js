import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../routes/HomePage/Home";
import PocaRan from "../routes/PocaRanPage/PocaRan";
import Test from "../routes/PocaRanPage copy/PocaRan";

const AppRouter = () => {
  return (
      <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/PocaRan" element = {<PocaRan/>}/>
            <Route path = "/Test" element = {<Test/>}/>
          </Routes>
      </Router>
  )
}

export default AppRouter;