import React from "react";
import LinkIcon from "./LinkIcon";

function Footer() {
  return (
    <div className="footer bg-yellow p-5 d-flex flex-column align-items-center">
      <div>Made with 🪄 by Vanshaj Bhatnagar</div>
      <div className="d-flex p-2 align-items-center w-auto">
        <LinkIcon
          url="https://www.instagram.com/vanshajbhatnagar/"
          img="images/instagram.png"
          atl="instagram"
        />
        <LinkIcon
          url="https://www.github.com/kraizan"
          img="images/github.png"
          atl="github"
        />
        <LinkIcon
          url="https://www.linkedin.com/in/vanshaj-bhatnagar-a0969a214/"
          img="images/linkedin.png"
          atl="linkedin"
        />
      </div>
      <a href="mailto:vanshajbhatnagar24@gmail.com">Contact Me</a>
    </div>
  );
}

export default Footer;
