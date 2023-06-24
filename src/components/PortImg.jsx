import React from "react";

function PortImg({ img, git, demo, desc, title }) {
  return (
    <div className="portcontain">
      <img className="portpic" src={img} alt="pic" />
      <h3 className="title"> {title}</h3>
      <span className="abt-port"> {desc} </span>
      <div className="link-contain">
        <a className="portlinks" href={demo} target="_blank">
          Live demo
        </a>
        <a className="portlinks" href={git} target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default PortImg;
