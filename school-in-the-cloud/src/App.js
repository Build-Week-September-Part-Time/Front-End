import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
        <p>This is the App</p> 
      <Router>
        <Route  path="/login" component={Login} />
        <Route  path="/signup" component={SignUp} />
        {/* To be made PrivateRoute */}
        <Route path="/student-home" component={StudentHome}/>
        <Route path="/volunteer-home" component={VolunteerHome}/>
        <Route path="/admin-hom" component={AdminHome}/>
      </Router>

    </div>
  );
}

export default App;
