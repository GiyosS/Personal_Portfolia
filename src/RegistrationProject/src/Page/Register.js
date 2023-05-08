import React from "react";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { useState } from "react";

import FormRow from "../Components/FormRow";
import { savePosts } from "../store/slice";

function Register(props) {
  const initialState = {
    name: "",
    surname: "",
    phone: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, phone, password } = values;
    if (!name || !password || !surname || !phone) {
      alert("Please fill out all fields");
      return;
    } else {
      navigate("/Registration/login");
    }
    dispatch(
      savePosts({
        name,
        surname,
        phone,
        password,
      })
    );
    setValues(initialState);
  };
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className={"container"}>
      <h1 className={"mt-5"}>Register</h1>
      <form id="form" onSubmit={handleSubmit}>
        <FormRow
          type={"text"}
          name={"name"}
          placeholder={"name"}
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          type={"text"}
          name={"surname"}
          placeholder={"surname"}
          value={values.surname}
          handleChange={handleChange}
        />
        <FormRow
          type={"number"}
          name={"phone"}
          placeholder={"phone"}
          value={values.phone}
          handleChange={handleChange}
        />

        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button form={"form"} className={"btn btn-success m-2"}>
          Register{" "}
        </button>

        <button
          className={"btn btn-success"}
          onClick={() => navigate("/Registration")}
        >
          Back to Login{" "}
        </button>
        <button className={"btn btn-success m-2"} onClick={() => navigate("/")}>
          Back to Main Page{" "}
        </button>
      </form>
    </div>
  );
}

export default Register;
