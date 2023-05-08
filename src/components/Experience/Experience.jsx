import "./Experience.css";

import { useSelector } from "react-redux";

const Experience = () => {
  const { modalVisibleDark } = useSelector((store) => store.actionSlice);
  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* "darkmode" */}
        <div
          className="circle"
          style={{ color: modalVisibleDark ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: modalVisibleDark ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: modalVisibleDark ? "var(--orange)" : "" }}
        >
          10+
        </div>
        <span style={{ color: modalVisibleDark ? "white" : "" }}>
          completed{" "}
        </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: modalVisibleDark ? "var(--orange)" : "" }}
        >
          3+
        </div>
        <span style={{ color: modalVisibleDark ? "white" : "" }}>
          companies{" "}
        </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
