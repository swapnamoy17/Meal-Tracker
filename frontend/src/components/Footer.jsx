import React from "react"

function Footer(){
  const year = new Date().getFullYear();
  return(
  <footer>
    <div className="footer-padding"></div>
      <div className="footer">
        <p>Swapnamoy Bhowmick @ {year}</p>
      </div>
  </footer>
);
}

export default Footer;
