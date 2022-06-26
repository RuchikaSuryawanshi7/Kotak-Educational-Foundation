import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardProfile from "components/Cards/CardProfile";
import TASidebar from "components/Sidebar/TASidebar";
export default function TADashboard() {
  return (
    <>
    <TASidebar/>
      <div className="flex flex-wrap">
        <div className="">
      <CardProfile/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
      
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    
        </div>
        <div className="w-full xl:w-4/12 px-4">
        
        </div>
      </div>
    </>
  );
}
