import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import Volunteer from './FormTypes/volunteer';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, useFormik } from "formik";
import * as Yup from 'yup';

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

   


function SignUp  (props){
const history = useHistory()

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    toggle: false,
    checked: [],
    state: 'Alaska',
    available: 'Morning',
   
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      
      .required('Required'),
    lastName: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .required('You must enter a password')
      .min(8, 'password must be at least 8 characters'),
    
      available: Yup.string(),
      
      checked: Yup.array()
      .required('You must make a selection')
      .max(1,'only make one selection')
      
    
   
      
  
  }),
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
});



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


  return (<div class='signup'>
    <h1>Sign Up</h1>
    <Formik
    initialValues={useFormik}
   
    >
      {({ values }) => (
        <Form  onSubmit={formik.handleSubmit} >
      
      <label htmlFor="firstName">First Name</label>
        <Field  onChange={formik.handleChange} id="firstName" name="firstName" placeholder="Jane" />
        {formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
        <div></div>
        <label htmlFor="lastName">Last Name</label>
        <Field onChange={formik.handleChange}  id="lastName" name="lastName" placeholder="Doe" />
        {formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
        <div></div>
        <label htmlFor="email">Email</label>
        <Field
          onChange={formik.handleChange} 
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
          {formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
     <div></div>
     <div></div>
        <label htmlFor="password">Enter a password</label>
        <Field
          onChange={formik.handleChange} 
          id="password"
          name="password"
          placeholder="must be at least 8 characters"
          type="password"
        />
   
    {formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <div></div>
     
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field onChange={formik.handleChange}  type="checkbox" name="checked" value="Student"   checked={Field.value}/>
              Student
            </label>
            <label>
              <Field onChange={formik.handleChange}  type="checkbox" name="checked" value="Admin" checked={Field.value} />
              Admin
            </label>
            <label>
              <Field onChange={formik.handleChange}  type="checkbox" name="checked" value="Volunteer"  checked={Field.value}  />
              Volunteer
            </label>
            {formik.errors.checked ? (
         <div>{formik.errors.checked}</div>
       ) : null}
          </div>

     
          {determineForm(formik.values)}
          <button disabled={!formik.isValid}
 type="submit">Submit</button>


        
        </Form>
      )}


    </Formik>

   
 
  </div>)
};

export default SignUp