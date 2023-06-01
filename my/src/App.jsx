
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
// import "./styles/services.scss";
import "./styles/media.scss";

function App() {
  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/services" element={<Services/>}></Route>
        <Route exact path="*" element={<div>not found</div>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
