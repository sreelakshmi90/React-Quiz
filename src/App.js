import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./style.css";

import Question from './User/Question';
import TimeOut from './User/TimeOut';
import ShowResult from './User/ShowResult';


export default function App() {
  return (
    <>
    <Router> 
    <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/timeout" element={<TimeOut />} />
        <Route path="/finish" element={<ShowResult />}>
          <Route path=":score" element={<ShowResult />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}
