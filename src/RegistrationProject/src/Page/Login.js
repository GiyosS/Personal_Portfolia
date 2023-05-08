import React from "react";

import { useNavigate } from "react-router";

function Login(props) {
  const navigate = useNavigate();
  return (
    <div className={"container m-5"}>
      <h1> You logged in </h1>
      <button
        className={"btn btn-success"}
        onClick={() => navigate("/Registration")}
      >
        Back to Login{" "}
      </button>

      <button className={"btn btn-success m-2 "} onClick={() => navigate("/")}>
        Back to Main Page{" "}
      </button>
    </div>
  );
}

export default Login;
