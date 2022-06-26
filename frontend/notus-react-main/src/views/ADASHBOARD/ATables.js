import React from "react";

// components

import CardAdTable from "components/Cards/CardAdTable";
import ASidebar from "components/Sidebar/ASidebar";
export default function ATables() {
  return (
    <>
    <ASidebar />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAdTable />
        </div>
        
      </div>
    </>
  );
}
