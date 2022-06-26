import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import ASidebar from "components/Sidebar/ASidebar";
import TSidebar from "components/Sidebar/TSidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Dashboard from "views/admin/Dashboard";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import ADashboard from "views/ADASHBOARD/ADashboard";
import TDashboard from "views/TDASHBOARD/TDashboard";
import ASettings from "views/ADASHBOARD/ASettings";
import TSettings from "views/TDASHBOARD/TSettings";
import ATables from "views/ADASHBOARD/ATables";
import TTables from "views/TDASHBOARD/TTables";
import TADashboard from "views/TADASHBOARD/TADashboard";
import TASettings from "views/TADASHBOARD/TASettings";
import TATables from "views/TADASHBOARD/TATables";
export default function Admin() {
  return (
    <>
      
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/Adashboard" exact component={ADashboard} />
            <Route path="/admin/Tdashboard" exact component={TDashboard} />
            <Route path="/admin/TAdashboard" exact component={TADashboard} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/Asettings" exact component={ASettings} />
            <Route path="/admin/Tsettings" exact component={TSettings} />
            <Route path="/admin/TAsettings" exact component={TASettings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/Atables" exact component={ATables} />
            <Route path="/admin/Ttables" exact component={TTables} />
            <Route path="/admin/TAtables" exact component={TATables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
