import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//contexts
import { TaskListContext } from "./contexts/TaskListContext";
import CurrentUserContext from "./contexts/CurrentUserContext";
import VolunteerListContext from "./contexts/VolunteerListContext";

//utils
import PrivateRoute from "./utils/PrivateRoute";
import axiosWithAuth from "./utils/axiosWithAuth";

//components
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import StudentHome from "./components/student/StudentHome";
import VolunteerHome from "./components/volunteer/VolunteerHome";
import AdminHome from "./components/admin/AdminHome";
import NavBar from "./components/NavBar";
import UpdateVolunteer from "./components/volunteer/UpdateVolunteer";


function App() {
  const [tasks, setTasks] = useState([]);
  const [volunteers, setVolunteers] = useState ([]);
  const [currentUser, setCurrentUser] = useState({});

  //This lags slightly behind and doesn't update until next render. How do I fix?
  const setUser = CurrentUser => {
	console.log("Set user, current usder", CurrentUser);
	//Set the email of the logged in user
	setCurrentUser(CurrentUser);
	console.log('this current user',CurrentUser);
  };

//   GET all Tasks 
useEffect(()=>{
	axiosWithAuth()
	.get("/dashboard/assignTasks")
	.then(res => {
		console.log('tasks from app', res)
		setTasks(res.data)
	})
	.catch(err =>{
		console.log('NOPE!', err)
	})
},[])


	//GET all Volunteers
	useEffect(() => {
	axiosWithAuth()
		.get("/dashboard/volunteers")
		.then((res) => {
			
			 setVolunteers(res.data);
			 
		})
		.catch((err) => {
			console.log("Volunteer get error");
		})


 	}, []);

	return (
		<div>
			<h1>⬆upGrade</h1>

			<Router>
				<CurrentUserContext.Provider value={{setUser, currentUser}}>
				<VolunteerListContext.Provider value={{volunteers}}>
				<TaskListContext.Provider value={{tasks}}>
					<NavBar />
					<Route path='/login' component={LogIn} />
					<Route path='/signup' component={SignUp} />
					{/* To be made PrivateRoute */}
					<PrivateRoute path='/student-home' component={StudentHome} />
					<PrivateRoute path='/volunteer-home' component={VolunteerHome} />
					<PrivateRoute path='/admin-home' component={AdminHome} />
					<PrivateRoute path='/update-volunteer' component={UpdateVolunteer}/>
				</TaskListContext.Provider>
				</VolunteerListContext.Provider>
				</CurrentUserContext.Provider>
			</Router>
		</div>
	);
}

export default App;
