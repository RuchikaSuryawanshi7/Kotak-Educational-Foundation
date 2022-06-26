import React from "react";
import CardSettings from "components/Cards/CardSettings.js";
import CardTATable from "components/Cards/CardTATable";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings/>
        </div>
      </div>
    </>
  );
}
