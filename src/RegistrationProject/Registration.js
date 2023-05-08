import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

import Error from "./src/Page/Error";
import Home from "./src/Page/Home";
import Login from "./src/Page/Login";
import Register from "./src/Page/Register";

function Registration() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default Registration;
