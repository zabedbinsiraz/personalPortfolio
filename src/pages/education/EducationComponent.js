import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import jabed from "../../jabed-pro.jpg";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      {/* <Header theme={props.theme} setTheme={props.setTheme} /> */}
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Resume
              </h1>

              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in hackathons and other tech-related
                activities. Below are some of my major
                certifications.lorem15l;j[ertlsdjgoidjgod]
              </p>
            </div>
          </div>

          <div className="m-2 p-2 text-center">
            <a
              className="btn btn-success "
              href="https://drive.google.com/uc?export=download&amp;id=1xAGXJkE02PKhn9-7OYwKrKUYoSL84Icm"
              role="button"
            >
              download
            </a>
          </div>
          <div id="container" className=" p-5">
            <header>
              <img className="profile-image" src={jabed} alt="jabed_hasan" />

              <div className="header-bio">
                <h2>Mohammad Jabed Hossain</h2>
                <h4>Web App Developer</h4>
              </div>

              <div className="header-contact">
                <p>
                  &#128231;{" "}
                  <a href="mailto:hossainjabed3@gmail.com" target="blank">
                    hossainjabed3@gmail.com{" "}
                  </a>
                </p>
                <p>
                  &#127760;{" "}
                  <a href="https://www.github.com/zabedbinsiraz" target="blank">
                    my github profile here
                  </a>
                </p>
                <p>
                  &#128222;{" "}
                  <a href="tel:+8801728985188" target="blank">
                    +880 1728985188
                  </a>
                </p>
              </div>
            </header>

            <div className="clear-div"></div>
            <hr />

            <main>
              <section id="personal-information">
                <div className="content">
                  <div className="left-div">
                    <h3> CAREER OBJECTIVE</h3>
                  </div>
                  <div className="right-div">
                    <p>
                      I am a dedicated front-end web developer. Always love to
                      solve any type of web related problems and also love to
                      learn any type of upcoming or old technology that’s
                      related to web development. Now I am completely determined
                      to reach myself as a pro web developer.
                    </p>
                  </div>
                </div>
              </section>

              <div className="clear-div"></div>
              <hr className="common-hr" />
              <section id="personal-information">
                <div className="content">
                  <div className="left-div">
                    <h3>DEVELOPING SKILLS</h3>
                  </div>
                  <div className="right-div">
                    <p>
                      <strong>Comfortable:</strong> JavaScript, ES6, React,
                      Redux, React Router, Next.js, HTML, CSS, SASS, Bootstrap{" "}
                      <br />
                      <strong>Familiar:</strong> TypeScript, GraphQL, Node.js,
                      Express.js, MongoDB, Mongoose, Material-UI, React-
                      Bootstrap, React Native, Wordpress, OOP, Python <br />
                      <strong>Tools:</strong> Git, VS Code, Chrome Dev Tools,
                      Heroku, Netlify, FirebaseGit, VS Code, Chrome Dev Tools,
                      Heroku, Netlify, Firebase <br />
                    </p>
                  </div>
                </div>
              </section>

              <div className="clear-div"></div>
              <hr className="common-hr" />

              <section id="Work-Experience">
                <div className="content">
                  <div className="left-div">
                    <h3>MY PROJECTS</h3>
                  </div>
                  <div className="right-div">
                    <h4>
                      {" "}
                      <a href="https://plumbing-hero.web.app/" target="blank">
                        Plumbing-Hero
                      </a>
                    </h4>

                    <ul>
                      <li>
                        Dynamic & responsive website with stripe payment
                        gateway.
                      </li>
                      <li>Separate dashboard for users and admin panels.</li>
                      <li>
                        {" "}
                        Technology: React, NodeJS, MongoDB, Express,
                        Material-UI, Firebase, Heroku
                      </li>
                    </ul>

                    <a
                      href="https://github.com/zabedbinsiraz/plumbing-hero-server"
                      target="blank"
                    >
                      server-site-code
                    </a>
                    <br />
                    <a
                      href="https://github.com/zabedbinsiraz/plumbing-hero"
                      target="blank"
                    >
                      client-site-code
                    </a>
                    <br />
                    <hr className="common-hr" />

                    <h4>
                      {" "}
                      <a href="https://tshirt-shop1.web.app/" target="blank">
                        T-Shirt Tray
                      </a>
                    </h4>

                    <ul>
                      <li>
                        {" "}
                        Dynamic & responsive website for e-commerce purpose.
                      </li>
                      <li>
                        {" "}
                        Admin can add products and show it in the homepage
                        dynamically. User can order any product dynamically.
                      </li>
                      <li>
                        {" "}
                        Technology: React, NodeJS, MongoDB, Express,
                        Material-UI, Firebase, Heroku
                      </li>
                    </ul>

                    <a
                      href="https://github.com/zabedbinsiraz/T-shirt-tray-server"
                      target="blank"
                    >
                      server-site-code
                    </a>
                    <br />
                    <a
                      href="https://github.com/zabedbinsiraz/T-shirt-tray-client"
                      target="blank"
                    >
                      client-site-code
                    </a>
                    <br />
                    <hr className="common-hr" />

                    <h4>
                      {" "}
                      <a href="http://reactauth-login.web.app/" target="blank">
                        Regular Driver
                      </a>
                    </h4>

                    <ul>
                      <li>
                        {" "}
                        Rider service website responsive for mobile & desktop.
                      </li>
                      <li>
                        {" "}
                        User can search the destination to see here the
                        available riders.
                      </li>
                      <li>
                        {" "}
                        Technology: Firebase authentication, React.js, CSS3,
                        material-UI, fontawesome.
                      </li>
                    </ul>

                    <a
                      href="https://github.com/zabedbinsiraz/Regular-Driver"
                      target="blank"
                    >
                      source-code
                    </a>
                    <br />

                    <hr className="common-hr" />
                  </div>
                </div>
              </section>

              <div className="clear-div"></div>
              <hr className="common-hr" />

              <section id="communication-skills">
                <div className="content">
                  <div className="left-div">
                    <h3>EDUCATION</h3>
                  </div>
                  <div className="right-div">
                    <p>
                      <strong>
                        National University Bangladesh - BSc in Mathematics -
                        (appeared)
                      </strong>
                    </p>
                  </div>
                </div>
              </section>

              <div className="clear-div"></div>
              <hr className="common-hr" />

              <section id="ielts-section">
                <div className="content">
                  <div className="left-div">
                    <h3>DECLARATION</h3>
                  </div>
                  <div className="right-div">
                    <p>
                      I hereby declare that the information above is true to the
                      best of my knowledge.
                    </p>
                  </div>
                </div>
              </section>

              <div className="clear-div"></div>
              <hr className="common-hr" />
            </main>

            <div className="clear-div"></div>

            <footer className="bottom-container">
              <a href="#container">Home</a>
              <a href="https://www.facebook.com/zabedbinsiraz" target="blank">
                Facebook
              </a>

              <a href=" https://github.com/zabedbinsiraz" target="blank">
                GitHub
              </a>
              <p>Copyright &copy; Mohammad Jabed Hossain 2021</p>
            </footer>
          </div>
        </Fade>
      </div>
      {/* <Footer theme={props.theme} /> */}
    </div>
  );
}

export default Education;
