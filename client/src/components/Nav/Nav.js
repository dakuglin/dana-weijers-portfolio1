import React from "react";
import "./nav.css";
import * as RBS from "react-bootstrap";;

function Nav() {
  return (
    <>  
    <RBS.Navbar bg="light" expand="lg">
      <RBS.Navbar.Brand href="/"><span className="nav-name">dana weijers</span></RBS.Navbar.Brand>
      <RBS.Navbar.Collapse id="basic-navbar-nav">
        <RBS.Nav className="mr-auto">
          <RBS.Nav.Link href="/"><span className="navLink">about me</span></RBS.Nav.Link>
          <RBS.Nav.Link href="/contact"><span className="navLink">contact</span></RBS.Nav.Link>
          <RBS.Nav.Link href="/portfolio"><span className="navLink">portfolio</span></RBS.Nav.Link>
          <RBS.Nav.Link  href="https://www.linkedin.com/in/danakuglin" target="_blank" rel="noopener noreferrer"><span className="navLink">linkedin</span></RBS.Nav.Link>
          <RBS.Nav.Link href="https://github.com/dakuglin" target="_blank" rel="noopener noreferrer"><span className="navLink">github</span></RBS.Nav.Link>
          <RBS.Nav.Link href="/resume"><span className="navLink">resume</span></RBS.Nav.Link>
        </RBS.Nav>
      </RBS.Navbar.Collapse>
      <RBS.Navbar.Toggle aria-controls="basic-navbar-nav" />
    </RBS.Navbar>
    </>
  );
};

export default Nav;
