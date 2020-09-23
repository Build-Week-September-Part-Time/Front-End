import React, {useState, useContext} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentUserContext";

/* admin login is admin1@gmail.com and password, volunteer login is volunteer1@gmail.com and password, student login is jakegilman@gmail.com and password */

const Login = (props) => {

 const {currentUser, setEmail} = useContext(CurrentUserContext);

 let loginFunc = (values) => {
   console.log("loginFunc");
   console.log("passed values", values);

   axios
   .post("https://upgrade-tutor.herokuapp.com/auth/login", values)
   .then((res) => {
     console.log(res);
    //  console.log("res headers", res.headers);

    setEmail(values.email);
    //Redirects after logging in
    // props.history.push("/studenthome");
   })
   .catch((err) => console.log(err));
 }


  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log("values email", values.email);
      loginFunc(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <h1>LOGIN</h1>
    
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
<div>
<label htmlFor="password">Password</label>
      <input id="password" type="text" {...formik.getFieldProps('password')} />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login

