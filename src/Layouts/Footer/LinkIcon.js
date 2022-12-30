import React from "react";

function LinkIcon(props) {
  return (
    <div>
      <div className="footer-icons mx-2">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.img} className="img-fluid" alt={props.alt}></img>
        </a>
      </div>
    </div>
  );
}

export default LinkIcon;
