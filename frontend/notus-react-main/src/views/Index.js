/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from "components/Slider/ImageSlider";
import { SliderData } from "components/Slider/SliderData";
import './Index-marquee.css'
export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <div className="container row pt-32">
        <div className="col-sm-8">
          <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                WHAT IS THE NGO ABOUT?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                 Our mission is to support children & youth from underprivileged families through different education based interventions to rise above the poverty line and lead a life of dignity through sustainable processes.
              </p>
              
          </div>
        </div>
        <div className="col-sm-12 pt-32 text-center">
        <ImageSlider slides={SliderData}></ImageSlider>
        </div>
      </div>
        
      

      

      
    
      
      <Footer />
    </>
  );
}