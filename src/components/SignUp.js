import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Volunteer from './FormTypes/volunteer'
import axios from 'axios'


function SignUp  (){
const [states, setStates] = useState([])

useEffect(() => {
  axios.get('https://www.universal-tutorial.com/api/states/United States', {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJuZ3JpZmZpdGgyOUBzdHVkZW50LmVnY2MuZWR1IiwiYXBpX3Rva2VuIjoiTmZaUGRGLWY4Q0xSbXJueC1aUGJTZ0FhdDBLVG9VbnFpUExMZ1RyTkFwb2FZUDlZZm45aFdpTDZudXJGb0hkOEIwSSJ9LCJleHAiOjE2MDA5OTI4MTN9.Z1Z0BAoV6vJqFbpQNzLlfLEItRPGJFrBYolL_JgV8eQ",
  "Accept": "application/json"
   //
  }
})
.then(function (response) {
  return response.data.map((e) => {
    return setStates(states => [...states, e])
    
    
  })
})
.catch(function (error) {
  console.log(error);
});
}, [])


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
              return <option key={index} value={e.state_name}>{e.state_name}</option>
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


  return (<div class='signup'>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        toggle: false,
        checked: [],
        state: 'Alaska',
        available: 'Morning'
      }}
      onSubmit={async values => {
        console.log(values)
      }}
    >
      {({ values }) => (
        <Form>
      
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

          <button type="submit">Submit</button>

        
        </Form>
      )}


    </Formik>

   
 
  </div>)
};

export default SignUp