import React from "react";
import "./bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Resoconti from "./components/pages/Resoconti";
import Uploader from "./components/pages/Uploader";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/upload" element={<Uploader />} />
            <Route path="/resoconti" element={<Resoconti />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
