import React from "react";
import CardSettings from "components/Cards/CardSettings.js";
import CardTATable from "components/Cards/CardTATable";
import TSidebar from "components/Sidebar/TSidebar";
export default function TSettings() {
  return (
    <>
    <TSidebar/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings/>
        </div>
      </div>
    </>
  );
}
