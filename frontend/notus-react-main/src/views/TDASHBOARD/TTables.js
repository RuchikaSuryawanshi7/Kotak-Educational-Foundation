import React from "react";

// components
import TSidebar from "components/Sidebar/TSidebar";
import CardTATable from "components/Cards/CardTATable";

export default function TTables() {
  return (
    <>
    <TSidebar/>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTATable />
        </div>
        
      </div>
    </>
  );
}
