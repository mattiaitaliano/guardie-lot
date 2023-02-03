import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Uploader from "./components/pages/Uploader";
import Resoconti from "./components/pages/Resoconti";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container py-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/upload" component={Uploader} />
            <Route path="/resoconti" component={Resoconti} />
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
