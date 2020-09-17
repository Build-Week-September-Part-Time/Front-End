import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import StudentHome from "./components/student/StudentHome";
import VolunteerHome from "./components/volunteer/VolunteerHome";
import AdminHome from "./components/admin/AdminHome";
import { UserContext } from "./contexts/UserContexts";

function App() {
  return (
    <div>
        <p>This is the App</p> 
      <Router>
        <Route  path="/login" component={LogIn} />
        <Route  path="/signup" component={SignUp} />
        {/* To be made PrivateRoute */}
        <Route path="/student-home" component={StudentHome}/>
        <Route path="/volunteer-home" component={VolunteerHome}/>
        <Route path="/admin-home" component={AdminHome}/>
      </Router>

    </div>
  );
}

export default App;
