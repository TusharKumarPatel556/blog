import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Errormsg from "../errorMsg/errormsg";
import { register } from "../../apis/user/user";
import styles from "./register.module.css";

const Register = () => {
  const [response, setResponse] = useState();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  console.log("base url is here :", process.env.REACT_APP_BASE_URL);
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    const response = await register(values);
    setResponse(response);
    if (response) {
      navigate("/");
    }
    console.log(response);
  };

  return (
    <div className={styles.login}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.registerform}>
          <div className={styles.inputcontainer}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <Field
              className={styles.input}
              placeholder="Enter Your Name..."
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage component={Errormsg} name="name" />
          </div>

          <div className={styles.inputcontainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <Field
              className={styles.input}
              placeholder="Enter Your Email..."
              type="text"
              name="email"
              id="email"
            />
            <ErrorMessage component={Errormsg} name="email" />
          </div>

          <div className={styles.inputcontainer}>
            <label className={styles.label} htmlFor="mobile">
              Mobile
            </label>
            <Field
              className={styles.input}
              placeholder="Enter Your mobile..."
              type="text"
              name="mobile"
              id="mobile"
            />
            <ErrorMessage component={Errormsg} name="mobile" />
          </div>

          <div className={styles.inputcontainer}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <Field
              className={styles.input}
              placeholder="Enter Your password..."
              type="text"
              name="password"
              id="password"
            />
            <ErrorMessage component={Errormsg} name="password" />
          </div>

          <div className={styles.submitbtn}>
            <button className={styles.button} variant="text" type="submit">
              Register
            </button>
          </div>
          <div>{response}</div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
