import React, {useEffect, useState} from "react";
import { Formik, Field, Form, useFormik } from "formik";
import axios from 'axios'
import * as Yup from 'yup';
import styled from "styled-components";


    const StyledErrors = styled.div`
    color: red;
  `;


function SignUp  (props){
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
    // localStorage.setItem('token', res.data.token);

    if(res.data.accountType === "volunteer") {
      props.history.push("/volunteer-home");
    }
    else if(res.data.accountType === "admin") {
      props.history.push("/admin-home");
    }
    else if(res.data.accountType === "student") {
      props.history.push("/student-home");
    }
  })
  .catch(err =>{
    console.log('nope', err)
  })
} 

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
    // alert(JSON.stringify(values, null, 2));
    postNewUser(values)
  },
});


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
    initialValues={useFormik}
   
    >
      {({ values }) => (
        <Form  onSubmit={formik.handleSubmit} >
      
      <label htmlFor="firstName">First Name</label>
        <Field  onChange={formik.handleChange} id="firstName" name="firstName" placeholder="Jane" />
        {formik.errors.firstName ? (
         <StyledErrors>{formik.errors.firstName}</StyledErrors>
       ) : null}
        <div></div>
        <label htmlFor="lastName">Last Name</label>
        <Field onChange={formik.handleChange}  id="lastName" name="lastName" placeholder="Doe" />
        {formik.errors.lastName ? (
         <StyledErrors>{formik.errors.lastName}</StyledErrors>
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
         <StyledErrors>{formik.errors.email}</StyledErrors>
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
         <StyledErrors>{formik.errors.password}</StyledErrors>
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
         <StyledErrors>{formik.errors.checked}</StyledErrors>
       ) : null}
          </div>

     
          {determineForm(formik.values)}
          <button disabled={!formik.isValid}
 type="submit">Submit</button>


        
        </Form>
      )}


    </Formik>

   
 
  </div>)
}

export default SignUp