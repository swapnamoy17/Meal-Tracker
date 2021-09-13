import React from "react";

function NavBar(props){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-header">
          <p className="navbar-brand">CALORIE TRACKER</p>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav navbar-nav navbar-right ms-auto">
            <a className={props.active[0]} aria-current="page" href="/">Home</a>
            <a className={props.active[1]} href="/about">About Me</a>
            <a className={props.active[2]} href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
