import "./Intro.css";
import boy from "../../img/Note1.PNG";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };
  const { modalVisibleDark } = useSelector((store) => store.actionSlice);

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: modalVisibleDark ? "white" : "" }}>
            Hy! I Am
          </span>
          <span>Giyos Matchanov</span>
          <span>
            I am a Frontend Developer. Experience in developing web applications
            using HTML, CSS, Bootstrap, Tailwind CSS, Material design and
            JavaScript Experience of state management methods in a React
            application (Redux, Context API, Hooks, Routing, Redux-Toolkit,
            )Json Server, Git, Github. NoSQL Core Experience with designing a
            good UI and UX
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />

        {/* animation */}
        <motion.img
          initial={{ left: "-70%" }}
          whileInView={{ left: "-30%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-10%", left: "74%" }}
          whileInView={{ left: "30%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
