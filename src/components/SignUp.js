import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Volunteer from './FormTypes/volunteer'

const sleep = ms => new Promise(r => setTimeout(r, ms));

const determineForm = (values) => {
   if(values.checked[0] === 'Student'){
     console.log('student')
     return <h1>Student</h1>
   }else if (values.checked[0] === 'Admin'){
     console.log('Admin')
     return <h1>Admin</h1>
   }else if(values.checked[0] === 'Volunteer'){
     return <Volunteer />
   }
}

const SignUp = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        toggle: false,
        checked: []
      }}
      onSubmit={async values => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
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

   
 
  </div>
);

export default SignUp