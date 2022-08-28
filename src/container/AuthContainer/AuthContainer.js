import React, { useRef, useState } from "react";
import { ERROR_EMPTY, ERROR_MISMATCH } from "../../utils";
const AuthContainer = ({setLoggedIn}) => {
  const email = useRef();
  const password = useRef();
  const [showError, setShowError] = useState({
    enabled: false,
    message: "",
  });
  const validateData = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      if (
        email.current.value === "demo@gmail.com" &&
        password.current.value === "12345"
      ) {
        localStorage.setItem('email','demo@gmail.com');
        localStorage.setItem('password', '12345');
        localStorage.setItem('name', 'Surya');
        setLoggedIn(true);
      } else {
        const x = {
          enabled: true,
          message: ERROR_MISMATCH,
        };
        setShowError({
          ...showError,
          ...x,
        });
      }
    } else {
      const x = {
        enabled: true,
        message: "Email and Password  should not be empty ",
      };
      setShowError({
        ...showError,
        ...x,
      });
    }
  };
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                ref={email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                ref={password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={validateData}
              >
                Submit
              </button>
            </div>
            {showError.enabled && (
              <div class="alert alert-danger" role="alert">
                {showError.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default AuthContainer;
