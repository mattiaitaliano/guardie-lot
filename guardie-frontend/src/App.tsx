import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
