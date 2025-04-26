import React from "react";
import Home from "../home/Home";
import Projects from "../projects";
import About from "../about/About";
import Contact from "../contactUs/Contact";
import Footer from "../footer/Footer";

const Body = () => {
  return (
    <>
      <div
        className="w-full "
        style={{
          background:
            "linear-gradient(to bottom, #caf0f8 0%, #caf0f8 100%, #f5fcff 100%)",
        }}
      >
        <section id="/">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Body;
