import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const [isSend, setIsSend] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9sq70qk",
        "template_zh18dwb",
        e.target,
        "user_U91HkGPS6U9rVtf2Sp1ii"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-main">
      {/* <Header theme={theme} setTheme={props.setTheme} /> */}
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            {/* <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div> */}
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              {/* <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a> */}
            </div>
          </div>
        </Fade>
      </div>
      {/* <Footer theme={props.theme} onToggle={props.onToggle} /> */}
      <div className="text-center">
        {isSend ? (
          <h5 style={{ color: "green" }}>You sent your message successfully</h5>
        ) : (
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="row pt-5 m-auto">
              <div className="col-md-7 form-group m-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-md-7 form-group pt-2 m-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-md-7 form-group pt-2 m-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-md-7 form-group pt-2 m-auto">
                <textarea
                  className="form-control"
                  cols="25"
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-md-7 form-group pt-3 m-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="send message"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
