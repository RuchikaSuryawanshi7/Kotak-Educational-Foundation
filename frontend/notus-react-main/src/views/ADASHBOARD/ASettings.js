import React from "react";
import Adminsubmission from "components/Cards/Adminsubmisson";
import CardTATable from "components/Cards/CardTATable";
import ASidebar from "components/Sidebar/ASidebar";
export default function ASettings() {
  return (
    <>
    <ASidebar />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <Adminsubmission/>
        </div>
      </div>
    </>
  );
}
