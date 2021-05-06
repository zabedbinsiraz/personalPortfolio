import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div style={{ textAlign: "center" }} className="footer-div">
      <SocialMedia />
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Developed by {greeting.title2}
        </p>
      </Fade>
      {/* <p><span role="img">❤️</span></p> */}
    </div>
  );
}
