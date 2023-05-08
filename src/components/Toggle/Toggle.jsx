
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useDispatch, useSelector } from "react-redux";
import { ToggleSunMoon } from "../../features/actionSlice";



const Toggle = () => {
  const { modalVisibleDark } = useSelector((store) => store.actionSlice);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ToggleSunMoon());
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={modalVisibleDark ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
