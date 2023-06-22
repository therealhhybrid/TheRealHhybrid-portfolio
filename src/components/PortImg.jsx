import React from "react";

function PortImg({ img, git, demo }) {
  return (
    <div className="portcontain">
      <img className="portpic" src={img} alt="pic" />
      <div>
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
