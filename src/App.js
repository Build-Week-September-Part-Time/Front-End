import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TaskListContext } from "./contexts/TaskListContext";
import CurrentUserContext from "./contexts/CurrentUserContext";
import data from "./data"
import axios from 'axios'


//components
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import StudentHome from "./components/student/StudentHome";
import VolunteerHome from "./components/volunteer/VolunteerHome";
import AdminHome from "./components/admin/AdminHome";
import NavBar from "./components/NavBar";
import Axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  //This lags slightly behind and doesn't update until next render. How do I fix?
  const setUser = currentUser => {
	console.log("Set user, current usder", currentUser);
	//Set the email of the logged in user
	setCurrentUser(currentUser);
	console.log(currentUser);
  };
//   const [tasks] = useState(data);
  
//   GET tasks from fake API 
//   useEffect(()=>{
// 	axios
// 	.get("http://localhost:3000/tasks")
// 	.then(res => {
// 		console.log('YAYYY!!', res)
// 		setTasks(res.data)
// 	})
// 	.catch(err =>{
// 		console.log('NOPE!', err)
// 	})
// },[])

// 	//POST tasks to fake API
// 	// useEffect((newTask)=>{
// 	// 	axios
// 	// 	.post("http://localhost:3000/tasks", newTask )
// 	// 	.then(res => {
// 	// 		console.log("yup", res)
// 	// 		setTasks([...tasks, res.data])
// 	// 	})
// 	// 	.catch(err =>{
// 	// 		console.log("nope", err)
// 	// 	})
// 	// })
	
	return (
		<div>
			<h1>⬆upGrade</h1>

			<Router>
				<CurrentUserContext.Provider value={{currentUser, setUser}}>
				<TaskListContext.Provider value={{tasks}}>
					<NavBar />
					<Route path='/login' component={LogIn} />
					<Route path='/signup' component={SignUp} />
					{/* To be made PrivateRoute */}
					<Route path='/student-home' component={StudentHome} />
					<Route path='/volunteer-home' component={VolunteerHome} />
					<Route path='/admin-home' component={AdminHome} />
				</TaskListContext.Provider>
				</CurrentUserContext.Provider>
			</Router>
		</div>
	);
}

export default App;
