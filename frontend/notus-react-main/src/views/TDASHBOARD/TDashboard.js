import React from "react";

// components
import TSidebar from "components/Sidebar/TSidebar";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import PiePlot from "components/Charts/PiePlot";

export default function TDashboard() {
  return (
    <>
    <TSidebar/>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 ">
          <PiePlot />
        </div>
        <div className="w-full xl:w-12/12 ">
          <CardBarChart />
        </div>
      </div>
     
    </>
  );
}
