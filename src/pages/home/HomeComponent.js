import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import Experience from "../experience/Experience";
import Education from "../education/EducationComponent";

function Home(props) {
  return (
    <div>
      {/* <Header theme={props.theme} setTheme={props.setTheme} /> */}
      <Greeting theme={props.theme} />

      <Projects theme={props.theme} />
      <Skills theme={props.theme} />
      <Contact theme={props.theme} />
    </div>
  );
}

export default Home;
