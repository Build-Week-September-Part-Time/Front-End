import React, {useState} from 'react';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
const [formType, setFormType] = useState({
   
})
  const formik = useFormik({
    initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        teacherCheck: false,
        studentCheck: false,
        adminCheck: false
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
        lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
     teacherCheck: Yup.bool(),
     studentCheck: Yup.bool(),
     adminCheck: Yup.bool()

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
         <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" {...formik.getFieldProps('firstName')} />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      </div>
      <div>
         <label htmlFor="lastName">LastName</label>
      <input id="firstName" type="text" {...formik.getFieldProps('LastName')} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      </div>
    
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

export default SignupForm

