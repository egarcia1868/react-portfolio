import React, { useState } from "react";
// import gitIcon from "../../assets/images/icons/giticon.png";



const Icon = (props) => {

  // const icon = ("../../assets/images/icons/"+props.icon);
  const [hover, setHover] = useState(false);

  const tooltipStyle = {
    color: hover ? 'gray' : 'white',
    fontFamily: ('Redressed', "cursive"),
    fontSize: "16px"

  }

  const handleMouseIn = () => {
    setHover( true )
  }
  
  const handleMouseOut = () => {
    setHover( false )
  }
  
  return (
    <div style={{"float": "left"}}>
      <div onMouseOver={handleMouseIn.bind(this)} onMouseOut={handleMouseOut.bind(this)}>
        <a href={props.url} target="_blank" rel="noreferrer"><img src={props.icon} className="skillsIcons" alt="Git" /></a>
      </div>
      <div>
        <div style={tooltipStyle}>
          {props.tag}
        </div>
      </div>
    </div>
  )
}
export default Icon