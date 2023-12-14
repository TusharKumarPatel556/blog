import React from "react";
import Login from "../../components/login/login";
import styles from "./login.module.css";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className={styles.loginpage}>
      <div className={styles.loginleft}>
        <Outlet />
      </div>
      <div className={styles.loginright}></div>
    </div>
  );
};

export default LoginPage;
