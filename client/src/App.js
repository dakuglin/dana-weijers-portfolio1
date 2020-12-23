import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MyResume from "./pages/MyResume";
// import Footer from "./components/Footer/index.js";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/resume" component={MyResume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
      <FooterContainer />
    </Router>
    </>
  );
}

export default App;
