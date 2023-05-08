import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Link } from "react-router-dom";

import RegistrationPage from "../../img/RegistrationPage.PNG";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
// import MenuPhoto from "../../img/Menu.png";
// import Menu from "../../img/Menu.png";
import MenuProject from "../../img/menu.PNG";
import UserPostProject from "../../img/Post_UserProject.PNG";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: "darkmode" ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <Link to="/Menu">
            <img src={MenuProject} alt="" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/Posting">
            <img src={UserPostProject} alt="" />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/Registration">
            <img src={RegistrationPage} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
