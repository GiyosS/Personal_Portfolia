import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import { useSelector } from "react-redux";

const Contact = () => {
  const { modalVisibleDark } = useSelector((store) => store.actionSlice);

  const form = useRef();
  const [show, setShow] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hifo1qk",
        "template_8rj6j8n",
        form.current,
        "AkydCpu_9ioZpeerL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: modalVisibleDark ? "white" : "" }}>
            Get in Touch
          </span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{show && "Thank you for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
