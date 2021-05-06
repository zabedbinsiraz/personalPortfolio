import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p style={{ fontSize: "2.5em" }} className="greeting-text">
                {greeting.title}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <br />
                <span style={{ color: theme.accentColor, fontSize: "1.5em" }}>
                  {greeting.full_name}{" "}
                </span>
                <br />
                <span style={{ fontSize: "0.9em", textAlign: "justify" }}>
                  {greeting.subTitle}
                </span>
              </p>
              <br />

              <div className="portfolio-repo-btn-div">
                <a
                  {...styles}
                  className=" button "
                  href="https://drive.google.com/uc?export=download&amp;id=1QwWoVzfrhWyj0LAuJEvEueyhegZ9WAq9"
                  role="button"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
