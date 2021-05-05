import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";

import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";

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
