import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  let x = 125;
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Teacher Assistants"
                  statTitle={x}
                  statArrow="up"
                  statPercent="1.28"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Total Institutions"
                  statTitle="850"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-school"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  statSubtitle="Students Affected"
                  statTitle="5400"
                  statArrow="up"
                  statPercent="1.10"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since 2020"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
