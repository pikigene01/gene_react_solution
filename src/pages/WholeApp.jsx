import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FunFact from "../components/FunFact";
import Specials from "../components/Specials";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";

export default function WholeApp() {
  return (
    <div>
      <Header />
      <main>
      <Banner/>
      <FunFact/>
      <Services />
      <Specials/>
      <Featured/>
      <Subscribe/>
      <Latest/>
      <About />
      <Contact />
      <Footer />
      </main>
    </div>
  );
}
