import React, { useState } from "react";
import styles from "./Formulario1.module.css";

const Formulario1 = () => {
  const [, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [, setLast] = useState("");
  const [lastError, setLastError] = useState("");

  const [, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 1) {
      setNameError("First name is required!");
    } else if (e.target.value.length < 3) {
      setNameError("First name must be at least 2 characters");
    } else if (e.target.value.length >= 3) {
      setNameError("");
    }
  };
  const handleLast = (e) => {
    setLast(e.target.value);
    if (e.target.value.length < 1) {
      setLastError("Last name is required!");
    } else if (e.target.value.length < 3) {
      setLastError("Last name must be at least 2 characters");
    } else if (e.target.value.length >= 3) {
      setLastError("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 3) {
      setEmailError("Email must be at least 2 characters");
    } else if (e.target.value.length >= 3) {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 3) {
      setEmailError("Password must be at least 2 characters");
    } else if (e.target.value.length >= 3) {
      setPasswordError("");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm password is required!");
    } else if (e.target.value.length < 3) {
      setConfirmPasswordError("Confirm password must be at least 2 characters");
    } else if (e.target.value.length >= 3) {
      setConfirmPasswordError("");
    }
  };

  return (
    <>
      <div className={styles.FormularioArr}>
        <label>First name : </label>
        <input type="text" onChange={handleName} />
        {nameError ? <p style={{ color: "red" }}>{nameError}</p> : ""}
      </div>
      <div className={styles.FormularioArr}>
        <label>Last name : </label>
        <input type="text" onChange={handleLast} />
        {lastError ? <p style={{ color: "red" }}>{lastError}</p> : ""}
      </div>
      <div className={styles.FormularioArr}>
        <label>Email : </label>
        <input type="text" onChange={handleEmail} />
        {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
      </div>
      <div className={styles.FormularioArr}>
        <label>Password : </label>
        <input type="text" onChange={handlePassword} />
        {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
      </div>
      <div className={styles.FormularioArr}>
        <label>Confirm password : </label>
        <input type="text" onChange={handleConfirmPassword} />
        {confirmPasswordError ? <p style={{ color: "red" }}>{confirmPasswordError}</p> : ""}
      </div>
    </>
  );
};

export default Formulario1;
