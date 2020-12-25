
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import "./style.css";

const Main = () => {

  return (
    <main>
      <div className="row" id="topSection">
        <div className="col-xl-2 col-lg-2 col-1">
        </div>
        <div className="col-xl-8 col-lg-8 col-10">
          <div id="intro">
            <Typing speed={1}>
              <p>Have an idea for a site or application?</p>
              <Typing.Delay ms={1000} />
              <p>Need to revamp an existing website?</p>
              <Typing.Delay ms={1000} />
              <p>Or just need a hand with a project?</p>
              <Typing.Delay ms={1000} />
              <p>
                <a className="gray" style={{"textDecoration": "none"}} href="mailto:egarcia1868@gmail.com"><span id="chat1"
                >Let's chat</span></a> <span id="chat2">and see how I can help!</span>
            </p>
            </Typing>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-1">
        </div>
        <div className="col-12"></div>
      </div>
      <div className="labelBar" id="about">
        <h1>
          About Me
        </h1>
      </div>
      <div className="row margBot">
        <div className="col-xl-2 col-lg-2 col-1">
        </div>
        <div className="col-xl-8 col-lg-8 col-10">
          <div>
            <p className="bio">
              Full-Stack Web Developer leveraging a background in leadership and client engagement to create a more accessible and performant user experience on the web. I'm a recent graduate of the UT Austin Coding Boot Camp where I created responsive web applications utilizing JavaScript, Node.js, React.js, and HTML/CSS.
            </p>
            <p className="bio">
              Throughout my years of management in the service industry, I've overseen various staff sizes and establishments.  As a result, I excel at time management, task prioritization, and problem solving.  I use these skills to create intuitive, responsive, and easily accessible sites to fit my client's needs.  Whether individually or with a team, I'm excited to contribute my skills and experience towards developing customer-focused applications.
            </p>
            <p className="bio">
              When I'm not coding (and not hiding from the plague), you can usually find me out rock climbing, at a
              concert or comedy show, or -if its football season- watching the Dallas Cowboys toy with my emotions.
            </p>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-1">
        </div>
      </div>
      <div className="labelBar" id="skills">
        <h1>
          Skills & Experience
        </h1>
      </div>
      <div className="row">
        <div className="col-xl-1 col-lg-1">
        </div>
        <div className="col-xl-5 col-lg-5 col-6">
          <p className="bio skills">
            Taking a project from an idea to a reality takes hard work and various skills. Here are some ways that I can
            help you achieve your goals:
          </p>
        </div>
        <div className="col-xl-5 col-lg-5 col-6">
          <p className="bio titleSkills">
            Commitment to Excellence
          </p>
          <p className="bio">
            When working independently I work tenaciously to not only fulfill, but surpass expectations.
            <br />
            When working in groups, I often find myself helping others or taking on additional tasks after finishing my original tasks early.
          </p><br />
          <p className="bio titleSkills">
            Staying Current With Technology
          </p>
          <p className="bio">
            In the field of web development, one must always be learning new languages and frameworks. I make it a point
            to stay up to date with the latest and most widely used coding languages in the industry.
          </p><br />
          <p className="bio titleSkills">
            Fast Learner
          </p>
          <p className="bio">
            During my time in class, I often found myself to be the first to pick up on new frameworks or techniques.  If I don’t yet possess knowledge of a certain technology that you prefer or require, I do possess the ability to pick it up quicker than most.
          </p>
        </div>
        <div className="col-xl-1 col-lg-1">
        </div>
      </div>
      <div className="row margBot">
        <div className="col-xl-1 col-lg-1">
        </div>
        <div className="col-xl-10 col-lg-10 col-12">
          <div style={{"marginBottom": "-125px"}}>
            <p className="titleSkills bio skillIcons">
              Some of the technologies that I am experienced with include:
            </p>
            <div className="row">
              <div className="text-center mx-5 col">
                <i alt="Git icon" className="fab skillsIcons fa-git-alt">
                  <p className="skillsIconP">
                    Git
                  </p>
                </i>
                <i alt="React.js icon" className="fab skillsIcons fa-react">
                  <p className="skillsIconP">
                    React
                  </p>
                </i>
                <i alt="Node.js icon" className="fab skillsIcons fa-node">
                  <p className="skillsIconP">
                    Node.js
                  </p>
                </i>
                <i alt="HTML icon" className="fab skillsIcons fa-html5">
                  <p className="skillsIconP">
                    HTML 5
                  </p>
                </i>
                <i alt="Javascript icon" className="fab skillsIcons fa-js-square">
                  <p className="skillsIconP">
                    Javascript
                  </p>
                </i>
                <i alt="CSS icon" className="fab skillsIcons fa-css3-alt">
                  <p className="skillsIconP">
                    CSS 3
                  </p>
                </i>
                <i alt="python icon" className="fab skillsIcons icon-python">
                  <p className="skillsIconP">
                    Python
                  </p>
                </i>
                <i alt="mySQL icon" className="fab skillsIcons icon-mysql">
                  <p className="skillsIconP">
                    MySQL
                  </p>
                </i>
                <i alt="Mongodb icon" className="fab skillsIcons icon-mongodb">
                  <p className="skillsIconP">
                    MongoDB
                  </p>
                </i>
                <i alt="Bootstrap icon" className="fab skillsIcons fa-bootstrap">
                  <p className="skillsIconP">
                    Bootstrap
                  </p>
                </i>
                <i alt="heroku icon" className="fab skillsIcons icon-heroku">
                  <p className="skillsIconP">
                    Heroku
                  </p>
                </i>
                <i alt="jQuery icon" className="fab skillsIcons icon-jquery">
                  <p className="skillsIconP">
                    jQuery
                  </p>
                </i>
              </div>
            </div>
            <div className="row margBot">
              <div className="text-center col">
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    WebPack
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    Express
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    Handlebars
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    React Router
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    Redux
                  </p>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-1 col-lg-1">
        </div>
      </div>
      <div className="labelBar" id="portfolio">
        <h1>
          Portfolio
        </h1>
      </div>
      <div className="row">
        <div className="col-xl-1 col-lg-1">
        </div>
        <div className="col-xl-10 col-lg-10 col-12">
          <div className="card">
            <a href="https://warm-bayou-44198.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/Boardgame.gif" alt="À la Board" />
              </a>
            <div className="card-body">
              <h2>
                À la Board
              </h2>
              <p className="card-text">
                An app for organizing board game parties. Uses a database to help share which games are
                owned by party attendees to know what games are available to be played.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              HTML, CSS, JavaScript, React.js, MySQL / JawsDB, REST API
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/A-La-Board" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://warm-bayou-44198.herokuapp.com/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
          <div className="card">
            <a href="https://cryptic-lowlands-31610.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/react-employee-directory.gif" alt="react employee directory" />
            </a>
            <div className="card-body">
              <h2>
                React Employee Directory
              </h2>
              <p className="card-text">
                An employee (superhero) directory that changes it's employee display order based on whichever category is clicked.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              HTML, CSS, JavaScript, React.js, Bootstrap
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/Work_Day_Scheduler" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://egarcia1868.github.io/Workday_Scheduler/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
          <div className="card">
            <a href="https://project-2-3-21-20.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/expediLog.png" alt="expediLog" />
            </a>
            <div className="card-body">
              <h2>
                expediLog
              </h2>
              <p className="card-text">
                An app for logging trip experiences - displaying the ability to use sequelize to store and retrieve data
                from databases.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              HTML, CSS, JavaScript, Express.js, MySQL / JawsDB, AJAX, REST API
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/expediLog" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://project-2-3-21-20.herokuapp.com/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
          <div className="card">
            <a href="https://whispering-ridge-27306.herokuapp.com/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/EatDaBurger.png" alt="EatDaBurger" />
            </a>
            <div className="card-body">
              <h2>
                MVC Demo App
              </h2>
              <p className="card-text">
                A simple app displaying the ability to use the MVC (Model-View-Controller) design pattern.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              HTML, CSS, JavaScript, handlebars.js, Node.js, Express, MySQL / JawsDB, MVC / ORM, Boostrap
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/MVC-proof-of-concept" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://whispering-ridge-27306.herokuapp.com/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
          <div className="card">
            <a href="https://egarcia1868.github.io/Casa-Cocktail/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/CasaCocktailsPic.png" alt="Casa Cocktails" />
            </a>
            <div className="card-body">
              <h2>
                Casa Cocktails
              </h2>
              <p className="card-text">
                An app for finding out what drinks can be made with what you have on hand including instruction on how to
                make them.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              H​TML, CSS, JavaScript, AJAX, jQuery, REST API
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/Casa-Cocktail" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://egarcia1868.github.io/Casa-Cocktail/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
          <div className="card">
            <a href="https://egarcia1868.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer">
              <img className="portfolioPic " src="./assets/images/WeatherScreenShot.png" alt="Weather Dashboard" />
            </a>
            <div className="card-body">
              <h2>
                Weather Dashboard
              </h2>
              <p className="card-text">
                An app that retrieves the current weather for a searched city along with the weather forecast for the next five days.
              </p>
            </div>
            <p className="card-stack">
              Stack:
            </p>
            <p className="card-text">
              HTML, CSS, JavaScript, AJAX, jQuery, Moment.js, Bootstrap, REST API
            </p>
            <div className="card-footer">
              <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868/Weather_Dashboard" target="_blank" rel="noreferrer"
                  aria-label="link to github repo"><i className="fab fa-github portfolioLinks"></i></a></div>
              <div className="portfolioLinkDivs"><a href="https://egarcia1868.github.io/Weather_Dashboard/" target="_blank" rel="noreferrer"
                  aria-label="link to deployed site"><i className="fas fa-external-link-alt portfolioLinks"></i></a></div>
            </div>
          </div>
        </div>
      
        <div className="col-xl-1 col-lg-1">
        </div>
      </div>
      <div className="labelBar" id="contact">
        <h1>
          Contact Me
        </h1>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="text-center col-md-6">
          <div className="portfolioLinkDivs"><a href="https://github.com/egarcia1868" target="_blank" rel="noreferrer"
              aria-label="GitHub icon"><i className="fab fa-github portfolioLinks"></i></a></div>
          <div className="portfolioLinkDivs"><a href="https://www.linkedin.com/in/egarcia1868/" target="_blank" rel="noreferrer"
              aria-label="Linked In icon"><i className="fab fa-linkedin portfolioLinks"></i></a></div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="container-fluid" id="contactInfo">
        <div className="row no-gutters">
          <div className="text-center col-md-4">
            <div className="container" style={{"display": "inline"}}><a href="mailto:egarcia1868@gmail.com"><i alt="Email icon"
                  className="fas fa-envelope contactTextIcon">
                  <p className="skillsIconP" style={{"marginTop": "10px"}}>
                    egarcia1868@gmail.com
                  </p>
                </i></a></div>
          </div>
          <div className="text-center col-md-4">
            <div className="container" style={{"display": "inline"}}>
              <a href="./assets/Resume.pdf" target="_blank" rel="noreferrer">
                <i alt="resume icon" className="fas fa-file contactTextIcon">
                  <p className="skillsIconP contactText">
                    Resume
                  </p>
                </i>
              </a>
            </div>
          </div>

          <div className="text-center col-md-4">
            <div className="container" style={{"display": "inline"}}><a href="tel:3252122774"><i alt="phone icon"
                  className="fas fa-mobile-alt contactTextIcon">
                  <p className="skillsIconP contactText">
                    (325) 212-2774
                  </p>
                </i></a></div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Main