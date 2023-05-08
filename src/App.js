import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";

import MenuProject from "./MenuProject/Main";
import PostUser from "./Project_app_structure_data_flow/Main";
import Registration from "./RegistrationProject/Registration";

function App() {
  const { modalVisibleDark } = useSelector((store) => store.actionSlice);
  return (
    <div
      className="App"
      style={{
        background: modalVisibleDark ? "black" : "",
        color: modalVisibleDark ? "white" : "",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Menu" element={<MenuProject />} />
        <Route path="Posting" element={<PostUser />} />
        <Route path="Registration/*" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
