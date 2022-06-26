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
      <marquee className="marq">KOTAK EDUCATION FOUNDATION</marquee>
      <section className="header relative items-center flex h-screen max-h-860-px" style={{marginTop:"-120px"}}>
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                WHAT IS THE NGO ABOUT?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                 Our mission is to support children & youth from underprivileged families through different education based interventions to rise above the poverty line and lead a life of dignity through sustainable processes.
              </p>
              
            </div>
          </div>
        </div>
        <ImageSlider slides={SliderData}></ImageSlider>
        {/* <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="..."
        /> */}
      </section>
        
      

      

      
    
      
      <Footer />
    </>
  );
}