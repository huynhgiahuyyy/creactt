import React from "react";
import "./ErrorMessage.css";
import ErrorIcon from "../assets/error.png";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="error-container">
      <img src={ErrorIcon} alt="Error" />
      <div className="error-message">
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default ErrorMessage;
