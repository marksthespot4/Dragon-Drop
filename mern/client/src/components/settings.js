import React, { useState } from "react";
import PanelPage from "./PanelPage";
import SideBar from "./SideBar";
import Switch from "react-switch";
import TabsDefault from "./TabsDefault";

const items = [
  { name: 'email', label: 'Change email' },
  { name: 'password', label: 'Change password' },
  { name: 'privacy', label: 'Change privacy' }]

function Settings() {  
    return (      
      <div className="Settings">
        <TabsDefault/>
      </div>
    );
  }

export default Settings;
//  <SideBar items={items}/> 
// was line 13
