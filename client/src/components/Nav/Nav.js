import React from "react";
import "./nav.css"

function Nav() {
  return (
    <>  
    <nav className="navbar navbar-expand-md navbar-light bg">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/"><span className="nav-text">about me</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact"><span className="nav-text">contact</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio"><span className="nav-text">portfolio</span></a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="/"><span className="nav-name">dana weijers</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/danakuglin" target="_blank" rel="noopener noreferrer"><span className="nav-text">linkedin</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/dakuglin" target="_blank" rel="noopener noreferrer"><span className="nav-text">github</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume"><span className="nav-text">resume</span></a>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Nav;
