import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Errormsg from "../errorMsg/errormsg";
import { login } from "../../apis/user/user";
import styles from "./login.module.css";

const Login = () => {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  console.log("base url is here :", process.env.REACT_APP_BASE_URL);
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    const response = await login(values);
    console.log(response);
    setResponse(response);
    if (response === "user success") {
      navigate("/userprofile", { replace: true });
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
              Login
            </button>
          </div>
          <div>{response}</div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
