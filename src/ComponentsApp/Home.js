import React from "react";
import Header from "../Home/Header";
import ImageSection from "../Home/ImageSection";
import ButtonGroup from "../Home/ButtonGroup";
import "../Home/HomeCss/Home.css";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <>
      <div className="grid-container">
        <div className="image">
          <ImageSection />
        </div>
        <div className="text-content">
          <Header />
          <ButtonGroup />
        </div>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
