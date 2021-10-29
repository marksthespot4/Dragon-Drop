import React, { useState } from "react";
import PanelPage from "./PanelPage";
import SideBar from "./SideBar";

const items = [
  { name: 'home', label: 'Home' },
  { name: 'sales', label: 'Sales' },
  { name: 'orders', label: 'Orders' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' }]

function Settings() {  
    return (      
      <div className="Settings">
         <SideBar items={items}/>
      </div>
     
    );
  }

  export default Settings;