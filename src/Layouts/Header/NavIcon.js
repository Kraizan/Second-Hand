import React from "react";

function NavIcon(props) {
  return (
    <div className="nav-icon">
      <img src={props.url} className="img-fluid" alt={props.alt}></img>
    </div>
  );
}

export default NavIcon;
