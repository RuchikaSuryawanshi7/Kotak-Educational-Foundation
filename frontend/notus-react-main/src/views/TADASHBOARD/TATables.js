import React from "react";

// components
import TASidebar from "components/Sidebar/TASidebar";
import TACardTable from "components/Cards/TACardTable";
export default function TATables() {
  return (
    <>
    <TASidebar/>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TACardTable />
        </div>
        
        
      </div>
    </>
  );
}