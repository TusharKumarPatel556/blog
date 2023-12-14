import React from "react";
import styles from "./form.module.css";

function Errormsg(props) {
  return <div className={styles.error}>{props.children}</div>;
}

export default Errormsg;
