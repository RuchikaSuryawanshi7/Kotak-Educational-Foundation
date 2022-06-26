import React from "react";

// components
import TACardSettings from "components/Cards/TACardSettings";
import CardProfile from "components/Cards/CardProfile.js";
import TASidebar from "components/Sidebar/TASidebar";
import Addteacher from "components/Cards/Addteacher";
export default function TASettings() {
  return (
    <>
    <TASidebar/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <TACardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
      
        </div>
      </div>
      <Addteacher />
    </>
  );
}
