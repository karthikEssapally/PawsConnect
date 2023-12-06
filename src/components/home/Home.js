import React, { useState, useContext } from "react";
import axios from "axios";
import { loginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Topbar from "../topbar/Topbar";
import Hero from "../hero/Hero";
import Services from "../services/Services";
import Footer from "../footer/Footer";
import ProductCarousel from "../productCarouse/ProductCarouse";
import OfferSection from "../offerSection/OfferSection";
function Home() {
  return (
    <div className="home-container">
      <Topbar/>
      <Hero/>
      <Services/>
      <ProductCarousel/>
      <OfferSection/>
      <Footer/>
      
    </div>
  );
          }  

export default Home;
