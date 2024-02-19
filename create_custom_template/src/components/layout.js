import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "../pages/home";
import Features from "../pages/features";
import FAQs from "../pages/faqs";
import About from "../pages/about";
import Contact from "../pages/contact";
import NoPageFound from "../pages/nopagefound";
import Fotoer from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

function Layout() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Nav />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/features" element={<Features />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NoPageFound />} />
              </Routes>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Fotoer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
