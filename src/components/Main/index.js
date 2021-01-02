
// eslint-disable-next-line no-unused-vars
import React from "react";
import Typing from "react-typing-animation";
import Icon from "../Icon";
import Card from "../Card";
import gitIcon from "../../assets/images/icons/giticon.png";
import githubIcon from "../../assets/images/icons/github.png";
import reactIcon from "../../assets/images/icons/reacticon.png";
import nodeJSIcon from "../../assets/images/icons/node-js.png";
import htmlIcon from "../../assets/images/icons/HTML_Logo_65687.png";
import javaScriptIcon from "../../assets/images/icons/Javascripticon.png";
import cssIcon from "../../assets/images/icons/css-512.png";
import pythonIcon from "../../assets/images/icons/python.png";
import mySQLicon from "../../assets/images/icons/MySQLicon.png";
import mongoDBIcon from "../../assets/images/icons/MongoDBicon.png";
import bootstrapIcon from "../../assets/images/icons/bootstrap-4.png";
import herokuIcon from "../../assets/images/icons/Herokuicon.png";
import jQueryIcon from "../../assets/images/icons/jQueryicon.png";
import handlebarsIcon from "../../assets/images/icons/handlebarsJSicon.jpeg";
import boardGamePic from "../../assets/images/Boardgame.gif";
import employeeDirectoryPic from "../../assets/images/react-employee-directory.gif";
import pupsterPic from "../../assets/images/pupsterDemo.gif";
import eatDaBurgerPic from "../../assets/images/EatDaBurger.png";
import casaCocktailsPic from "../../assets/images/CasaCocktailsPic.png";
import weatherAppPic from "../../assets/images/WeatherScreenShot.png";
import resume from "../../assets/Resume.pdf"
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
                <a className="gray" style={{"textDecoration": "none"}} href="mailto:egarcia1868@gmail.com">Let's chat</a> and see how I can help!
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
            Taking a project from an idea to a reality takes hard work, a solid skillset, and the ability to overcome new challenges. 
          </p>
          <p className="bio skills">
            Here are some ways that I can help you achieve your goals:
          </p>
        </div>
        <div className="col-xl-5 col-lg-5 col-6">
          <p className="bio titleSkills">
            Commitment to Excellence
          </p>
          <p className="bio">
            When working independently I work tenaciously to not only fulfill, but surpass expectations.
            <br />
            When working with a group, I often find myself helping others or taking on additional tasks after finishing my original tasks early.
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
            <p className="titleSkills bio skillIconsTitle">
              Some of the technologies that I am experienced with include:
            </p>
            <div className="row">
              <div className="col-1"></div>
              <div className="text-center justify-content-center margBot col-10">
                <Icon
                  icon={gitIcon}
                  tag="Git"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk00o5zjEMcohxeHYclsI1gR_8pViOQ%3A1609223705519&ei=Gc7qX_yUH4GZ5gKihpzoDA&q=git&oq=git&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIKCAAQsQMQyQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzoECAAQRzoCCAA6CggAELEDEIMBEENQ6KgJWOOpCWDIqgloAHAEeACAAWiIAc0BkgEDMC4ymAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwi8hdO6yfLtAhWBjFkKHSIDB80Q4dUDCA0&uact=5"
                />
                <Icon
                  icon={githubIcon}
                  tag="GitHub"
                  url="https://www.google.com/search?q=github&rlz=1C5CHFA_enUS855US855&oq=github&aqs=chrome..69i57j35i39j69i60l2j69i65l2j69i60l2.1919j0j4&sourceid=chrome&ie=UTF-8"
                />
                <Icon
                  icon={reactIcon}
                  tag="React"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk01sHTsxSSGzK4-vN3rY1COlxD9fiQ%3A1609225186051&ei=4tPqX67cAsqG5wK_34iADw&q=react&oq=react&gs_lcp=CgZwc3ktYWIQAzIHCCMQyQMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzoECAAQRzoFCAAQsQM6AggAOg4ILhCxAxCDARDHARCjAjoICAAQsQMQgwE6CAguEMcBEKMCOgsILhCxAxDHARCjAjoECC4QQzoKCAAQsQMQgwEQQ1DtWFi5XGDyXGgAcAR4AIABdogBuQOSAQMwLjSYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiu1c_8zvLtAhVKw1kKHb8vAvAQ4dUDCA0&uact=5"
                />
                <Icon
                  icon={nodeJSIcon}
                  tag="nodeJS"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk01sHTsxSSGzK4-vN3rY1COlxD9fiQ%3A1609225186051&ei=4tPqX67cAsqG5wK_34iADw&q=nodejs&oq=nodejs&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzIECAAQQzIECAAQQzIJCAAQsQMQChBDMgYIABAKEEMyBAgAEEMyBAgAEEMyAggAMgIIADIFCAAQsQM6BAgAEEc6BAgjECc6CAgAELEDEIMBOggILhCxAxCDAToOCC4QsQMQgwEQxwEQowI6BwgAEMkDEEM6BwgAELEDEEM6CggAELEDEIMBEEM6BwgAEBQQhwJQpHBYsXdg03hoAHAEeACAAYEBiAGeBZIBAzAuNpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiu1c_8zvLtAhVKw1kKHb8vAvAQ4dUDCA0&uact=5"
                />
                <Icon
                  icon={htmlIcon}
                  tag="HTML"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk01fg-NV3kbTDR0be-bQ1x7istFHaA%3A1609225235922&ei=E9TqX7TiN4Pl5gKSr734Ag&q=html&oq=html&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIHCAAQyQMQQzIGCAAQChBDMgQIABBDMgcIABCxAxBDMgQIABBDMgUIABCxAzICCAAyAggAMgIIADoECAAQRzoOCC4QsQMQgwEQxwEQowI6CwguELEDEMcBEKMCOggILhCxAxCDAToICAAQsQMQgwE6CggAELEDEIMBEENQn1JYllRg8VVoAHAEeACAAXeIAa4DkgEDMC40mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwj0t7OUz_LtAhWDslkKHZJXDy8Q4dUDCA0&uact=5"
                />
                <Icon
                  icon={javaScriptIcon}
                  tag="JavaScript"
                  url="https://www.google.com/search?q=javascript&rlz=1C5CHFA_enUS855US855&oq=javascript&aqs=chrome.0.69i59l3j69i60l3j69i65j69i60.2399j0j4&sourceid=chrome&ie=UTF-8"
                />
                <Icon
                  icon={cssIcon}
                  tag="CSS"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk037AFezwop2YQ2H6u3Nd_B2PJYigw%3A1609225282401&ei=QtTqX--CGKXX5gK5urO4Ag&q=css&oq=css&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECCMQJzIKCAAQsQMQyQMQQzIECAAQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzoECAAQRzoFCAAQsQM6CAgAELEDEIMBOg4ILhCxAxCDARDHARCjAlD7oQFY9qMBYOCsAWgAcAR4AIABe4gB1gKSAQMwLjOYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjvq8iqz_LtAhWlq1kKHTndDCcQ4dUDCA0&uact=5"
                />
                <Icon
                  icon={pythonIcon}
                  tag="Python"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk00tfhyVYvaECKBNq41ih8l3uh2zxg%3A1609225305670&ei=WdTqX96xKIOV5wKsn42ACA&q=python&oq=python&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIFCAAQsQMyAggAMgUIABCxAzoECAAQRzoECCMQJzoICAAQsQMQgwE6CAguELEDEIMBOgsILhCxAxDHARCjAjoFCC4QsQNQlZIDWNyVA2CGlwNoAHAEeACAAXaIAfoEkgEDMi40mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiewtS1z_LtAhWDylkKHaxPA4AQ4dUDCA0&uact=5"
                />
                <Icon
                  icon={mySQLicon}
                  tag="MySQL"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk0159b_G93A00uFLOGeAm3MxuF8f2A%3A1609225951927&ei=39bqX8qAOPHt5gKTtYnoCg&q=mysql&oq=my&gs_lcp=CgZwc3ktYWIQAxgCMgQIIxAnMgQIIxAnMgcIABDJAxBDMgQIABBDMgQIABBDMgQILhBDMgQIABBDMgoIABCxAxCDARBDMggIABCxAxCDATIFCC4QsQM6BAgAEEc6BQgAELEDOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6CAguELEDEIMBUMpVWPlXYJloaABwA3gAgAF2iAHgAZIBAzAuMpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab"
                />
                <Icon
                  icon={mongoDBIcon}
                  tag="MongoDB"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk02gKCmzEREpYtyXEU_gHF-3utbdxg%3A1609225358859&ei=jtTqX8P0M6_P5gLKvYjwBA&q=mongodb&oq=mongodb&gs_lcp=CgZwc3ktYWIQAzIHCCMQyQMQJzIECCMQJzIHCAAQsQMQQzIECAAQQzIHCAAQsQMQQzIHCAAQsQMQQzIHCAAQsQMQQzIECAAQQzINCAAQsQMQgwEQFBCHAjIHCAAQFBCHAjoECAAQRzoICC4QxwEQowI6AggAOggIABCxAxCDAToFCAAQsQM6DgguELEDEIMBEMcBEKMCOgQILhBDOggILhCxAxCDAToKCC4QxwEQrwEQJzoHCC4QsQMQQzoKCCMQsQIQyQMQJzoHCCMQsQIQJzoECAAQClCnnANY4qQDYIimA2gBcAR4AIABdIgB3QaSAQMxLjeYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjD84LPz_LtAhWvp1kKHcoeAk4Q4dUDCA0&uact=5"
                />
                <Icon
                  icon={bootstrapIcon}
                  tag="Bootstrap"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk03sxVD16U9NgOQrhVumLMeyEa8A1g%3A1609225414284&ei=xtTqX93dEISG5wK7-5PoAw&q=bootstrap&oq=bootstrap&gs_lcp=CgZwc3ktYWIQAzIHCCMQyQMQJzIECCMQJzIECAAQQzIKCAAQsQMQFBCHAjICCAAyBwgAELEDEEMyBAgAEEMyBAgAEEMyBwgAELEDEEMyBAgAEEM6BAgAEEc6DgguELEDEIMBEMcBEKMCOggILhCxAxCDAToICAAQsQMQgwE6CwguELEDEMcBEKMCOgoIABCxAxCDARBDOgUIABCxA1DAbFimfmCxf2gAcAN4AIABiAGIAegHkgEDMi43mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjd2Lnpz_LtAhUEw1kKHbv9BD0Q4dUDCA0&uact=5"
                />
                <Icon
                  icon={herokuIcon}
                  tag="Heroku"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk00_FczKgKSUAgf-jBgf1IxTmo1NMg%3A1609225431756&ei=19TqX4_aLYWc5gLJ4ojoCg&q=heroku&oq=heroku&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzICCAAyBwgAEBQQhwIyBAgAEEMyBAgAEEMyAggAMgcIABAUEIcCMgIIADICCAAyBwgAELEDEEM6BAgAEEc6BAgjECc6DgguELEDEIMBEMcBEKMCOgsILhCxAxDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOgQILhBDOgcILhCxAxBDOgcIABDJAxBDULPcAViC5QFg8-YBaABwA3gAgAGbAYgBsQWSAQMzLjOYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwjPoeTxz_LtAhUFjlkKHUkxAq0Q4dUDCA0&uact=5"
                />
                <Icon
                  icon={jQueryIcon}
                  tag="jQuery"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk01TiXFRjneCP2HEXknNXKTS91hWMQ%3A1609225462515&ei=9tTqX8D5HpKu5wKdhZyQBw&q=jquery&oq=jquery&gs_lcp=CgZwc3ktYWIQAzIHCCMQyQMQJzIHCAAQsQMQQzIKCAAQsQMQFBCHAjIECAAQQzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgUIABCxAzoECAAQRzoECCMQJzoICC4QsQMQgwE6DgguELEDEIMBEMcBEKMCOgsILhCxAxDHARCjAjoFCC4QsQM6AggAUJmMAVjlkAFg6JIBaABwA3gAgAF0iAHdBJIBAzMuM5gBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwjAzLmA0PLtAhUS11kKHZ0CB3IQ4dUDCA0&uact=5"
                />
                <Icon
                  icon={handlebarsIcon}
                  tag="Handlebars.js"
                  url="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk0076uWh86YysSR2Y1UB8HUi31y_Ew%3A1609225482250&ei=CtXqX4DoDqb85gK95Ju4BQ&q=handlebars+js&oq=hanlde&gs_lcp=CgZwc3ktYWIQAxgFMgcIIxCxAhAnMgcIIxCxAhAnMg0IABCxAxCxAxDJAxBDMgQIABBDMgQIABBDMgcIABCxAxAKMgQIABAKMgQIABAKMgQIABAKMgcIABCxAxAKOgQIABBHOgQIIxAnOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6CAguELEDEIMBOggIABCxAxCDAToCCAA6BQgAELEDOgoIABCxAxDJAxBDOgcIABCxAxBDUND1AVj--AFgrpECaABwA3gBgAGQAYgBtwWSAQMwLjaYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab"
                />
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    <a href="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk00cTUExQA9Mi9wLstZXzxAvUFnSbQ%3A1609225518224&ei=LtXqX5mVDYmm5wKhhoG4Cw&q=webpack&oq=webpack&gs_lcp=CgZwc3ktYWIQAzIKCAAQsQMQyQMQQzIECAAQQzIFCAAQkQIyCwgAELEDEIMBEJECMgQIABBDMgcIABAUEIcCMgcIABAUEIcCMgoIABCxAxCDARBDMgQIABBDMgQIABBDOgQIABBHOgQIIxAnOggIABCxAxCDAToLCC4QsQMQxwEQowI6DgguELEDEIMBEMcBEKMCOggILhCxAxCDAToFCAAQsQM6BwgAEMkDEENQw3lYzoIBYI6EAWgAcAR4AIABfYgB-wWSAQMyLjWYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiZ5IGb0PLtAhUJ01kKHSFDALcQ4dUDCA0&uact=5" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">WebPack</a>
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    <a href="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk002bst1yUvc-CvWec2j48Yv6PCrOg%3A1609225575675&ei=Z9XqX5rVKIyu5wKHj4WoCw&q=express+js&oq=express+js&gs_lcp=CgZwc3ktYWIQAzIHCAAQsQMQQzIFCAAQkQIyAggAMgcIABCxAxBDMgIIADICCAAyAggAMgYIABAHEB4yAggAMgIIADoECAAQR1CPLFiPLGDLLWgAcAJ4AIABeYgBeZIBAzAuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwjapLS20PLtAhUM11kKHYdHAbUQ4dUDCA0&uact=5" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>Express.js</a>
                  </p>
                </i>
                <i className="fab skillsIcons">
                  <p className="noIconP">
                    <a href="https://www.google.com/search?rlz=1C5CHFA_enUS855US855&sxsrf=ALeKk01ERvF9dZ3Od2BLDI6rooSwodBv8Q%3A1609225675852&ei=y9XqX5zJM6-L5wLB_b-gDg&q=react+router&oq=react+router&gs_lcp=CgZwc3ktYWIQAzIICAAQsQMQyQMyAggAMgUIABCxAzIFCAAQsQMyBQgAELEDMggIABCxAxCDATICCAAyAggAMgIIADICCAA6BAgAEEc6BAgjECc6BAgAEEM6BwgAEMkDEEM6CggAELEDEMkDEEM6BwgAELEDEENQsdcIWIDlCGCh5ghoAHAEeACAAXiIAd4JkgEDNS43mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjc2pbm0PLtAhWvxVkKHcH-D-QQ4dUDCA0&uact=5" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>React Router</a>
                  </p>
                </i>
              </div>
              <div className="col-1"></div>
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
          <Card
            url="https://warm-bayou-44198.herokuapp.com/"
            src={boardGamePic}
            title="À la Board"
            description="An app for organizing board game parties. Uses a database to help share which games are owned by party attendees to know what games are available to be played."
            stack="HTML, CSS, JavaScript, React.js, MySQL / JawsDB, REST API"
            github="https://github.com/egarcia1868/A-La-Board"
          />
          <Card
            url="https://react-employee-directory1868.herokuapp.com/"
            src={employeeDirectoryPic}
            title="React Employee Directory"
            description="An employee (superhero) directory that changes it's employee display order based on whichever category is clicked."
            stack="HTML, CSS, JavaScript, React.js, Bootstrap"
            github="https://github.com/egarcia1868/react-employee-dir"
          />
          <Card
            url="https://pupster-app-react.herokuapp.com/"
            src={pupsterPic}
            title="Pupster App"
            description="A demo app mainly to demonstrate my ability to use React, React Router, and REST API"
            stack="HTML, CSS, JavaScript, React, React Router, Axios.js, REST API"
            github="https://github.com/egarcia1868/PupsterApp"
          />
          <Card
            url="https://whispering-ridge-27306.herokuapp.com/"
            src={eatDaBurgerPic}
            title="MVC Demo App"
            description="A simple app displaying the ability to use the MVC (Model-View-Controller) design pattern."
            stack="HTML, CSS, JavaScript, handlebars.js, Node.js, Express, MySQL / JawsDB, MVC / ORM, Boostrap"
            github="https://github.com/egarcia1868/MVC-proof-of-concept"
          />
          <Card
            url="https://egarcia1868.github.io/Casa-Cocktail/"
            src={casaCocktailsPic}
            title="Casa Cocktails"
            description="An app for finding out what drinks can be made with what you have on hand including instruction on how to make them."
            stack="H​TML, CSS, JavaScript, AJAX, jQuery, REST API"
            github="https://github.com/egarcia1868/Casa-Cocktail"
          />
          <Card
            url="https://egarcia1868.github.io/Weather_Dashboard/"
            src={weatherAppPic}
            title="Weather Dashboard"
            description="An app that retrieves the current weather for a searched city along with the weather forecast for the next five days."
            stack="HTML, CSS, JavaScript, AJAX, jQuery, Moment.js, Bootstrap, REST API"
            github="https://github.com/egarcia1868/Weather_Dashboard"
          />
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
              <a href={resume} target="_blank" rel="noreferrer">
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