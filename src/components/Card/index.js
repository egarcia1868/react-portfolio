import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <a href={props.url} target="_blank" rel="noreferrer">
        <img className="portfolioPic " src={props.src} alt={props.title} />
      </a>
      <div className="card-body">
        <h2>
          {props.title}
        </h2>
        <p className="card-text">
          {props.description}
        </p>
      </div>
      <p className="card-stack">
        Stack:
      </p>
      <p className="card-text">
        {props.stack}
      </p>
      <div className="card-footer">
        <div className="portfolioLinkDivs">
          <a href={props.github} target="_blank" rel="noreferrer" aria-label="link to github repo">
            <i className="fab fa-github portfolioLinks">
            </i>
          </a>
        </div>
        <div className="portfolioLinkDivs">
          <a href={props.url} target="_blank" rel="noreferrer" aria-label="link to deployed site">
            <i className="fas fa-external-link-alt portfolioLinks">
            </i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card;