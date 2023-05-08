import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router";

import FormRow from "../Components/FormRow";
import { getPosts } from "../store/slice";

function Home() {
  const { registration } = useSelector((store) => store.slice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const navigate = useNavigate();
  const initialState = {
    name: "",
    password: "",
    phone: "",
  };
  const [values, setValues] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, phone } = values;
    if (!name || !password || !phone) {
      alert("Action completed successfully!");
      return;
    }

    const found = registration.find((item) => {
      return (
        item.name === name && item.password === password && item.phone === phone
      );
    });
    if (found) {
      navigate("/Registration/login");
    } else {
      alert("Your Login or Password or Phone Number is not correct");
    }
  };

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  return (
    <div className={"container mt-5"}>
      <h1> Welcome to Registration Page</h1>
      <form id="form" onSubmit={handleSubmit}>
        <FormRow
          type={"text"}
          name={"name"}
          placeholder={"name"}
          value={values.name}
          onchange
          handleChange={handleChange}
        />

        <FormRow
          type={"number"}
          name={"phone"}
          placeholder={"phone"}
          value={values.phone}
          onchange
          handleChange={handleChange}
        />
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
        />
        <button form={"form"} className={"btn btn-success m-2"}>
          Login
        </button>
        <button
          className={"btn btn-success"}
          onClick={() => navigate("/Registration/register")}
        >
          Register
        </button>
        <button className={"btn btn-success m-2"} onClick={() => navigate("/")}>
          Back
        </button>
      </form>
    </div>
  );
}

export default Home;
