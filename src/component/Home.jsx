import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
