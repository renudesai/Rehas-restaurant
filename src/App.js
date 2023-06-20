import React from "react";
import {
  AboutUs,
  Chef,
  Findus,
  Footer,
  Gallery,
  Header,
  Intro,
  Accolades,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Accolades />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
