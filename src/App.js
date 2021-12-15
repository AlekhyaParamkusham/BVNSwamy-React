import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles";
import ShortSayings from "./components/ShortSayings";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";

import SS1 from "./images/ShortSayings/SS1.jpg";
import SS2 from "./images/ShortSayings/SS2.jpg";
import SS3 from "./images/ShortSayings/SS3.jpg";
import SS4 from "./images/ShortSayings/SS4.jpg";
import SS5 from "./images/ShortSayings/SS5.jpg";
import SS6 from "./images/ShortSayings/SS6.jpg";
import SS7 from "./images/ShortSayings/SS7.jpg";
import SS8 from "./images/ShortSayings/SS8.jpg";
import SS9 from "./images/ShortSayings/SS9.jpg";
import SS10 from "./images/ShortSayings/SS10.jpg";
import SS11 from "./images/ShortSayings/SS11.jpg";
import SS12 from "./images/ShortSayings/SS12.jpg";
import NewsFeatures from "./components/NewsFeatures";
import NewsOuter from "./components/NewsOuter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/short-sayings">
            <div className="container" style={{ marginBottom: "40px" }}>
              <div className="row">
                <ShortSayings src={SS1} />
                <ShortSayings src={SS2} />
                <ShortSayings src={SS3} />
                <ShortSayings src={SS4} />
                <ShortSayings src={SS5} />
                <ShortSayings src={SS6} />
                <ShortSayings src={SS7} />
                <ShortSayings src={SS8} />
                <ShortSayings src={SS9} />
                <ShortSayings src={SS10} />
                <ShortSayings src={SS11} />
                <ShortSayings src={SS12} />
              </div>
            </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/news-features">
            <NewsOuter />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
