import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Volunteer from './FormTypes/volunteer';
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

let states = ["Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"]

const sleep = ms => new Promise(r => setTimeout(r, ms));


function SignUp  (props){
const history = useHistory()


const postNewUser = (values) => {
  console.log('values',values)

  const newUser = {
    firstname: values.firstName.trim(),
    lastname: values.lastName.trim(),
    email: values.email.trim(),
    state: values.state,
    password: values.password,
    availability: values.available,
    accountType: values.checked.toString().toLowerCase()
  }
  
  console.log('newUser', newUser)
  axios
  .post('https://upgrade-tutor.herokuapp.com/auth/register', newUser)
  .then(res => {
    console.log("res is herrr", res)
    localStorage.setItem('token', res.data.token);
    if(res.data.user.accountType === "volunteer") {
      props.history.push("/volunteer-home");
    }
    else if(res.data.user.accountType === "admin") {
      props.history.push("/admin-home");
    }
    else if(res.data.user.accountType === "student") {
      props.history.push("/student-home");
    }
  })
  .catch(err =>{
    console.log('nope', err)
  })
} 

const determineForm = (values) => {
  if(values.checked[0] === 'Student'){
    console.log('student')
    return <h1>Student</h1>
  }else if (values.checked[0] === 'Admin'){
    console.log('Admin')
    return <h1>Admin</h1>
  }else if(values.checked[0] === 'Volunteer'){
    return  (
      <>
      <label >
      Select your state
<Field as="select" name="state">

          {states.map((e, index) => {
              return <option key={index} value={e}>{e}</option>
          })}

      </Field>
  </label>
  <label >
     Pick your availability
    <Field as="select" name="available">
        <option value='Morning'>Morning</option>
        <option value='Afternoons'>Afternoons</option>
        <option value='Evenings'>Evenings</option>
      </Field>
  </label>
  </>
    )
  }
}

  return (<div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        toggle: false,
        checked: [],
        state: 'Alaska',
        available: 'Morning'
      }}
      onSubmit={async values => {
        console.log('values',values)
        postNewUser(values)
      }}
    >
      {({ values }) => (
        <Form >
      
      <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />
        <div></div>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <div></div>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <div></div>
         <label htmlFor="password">Password</label>
         <Field
          id="password"
          name="password"
          placeholder="password"
          type="password"
        />
     <div></div>
    
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="Student" />
              Student
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Admin" />
              Admin
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Volunteer" />
              Volunteer
            </label>
          </div>


          {determineForm(values)}

          <button onSubmit={postNewUser}>Submit</button>

        
        </Form>
      )}


    </Formik>

   
 
  </div>)
};

export default SignUp