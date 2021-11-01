

//import useState hook to create menu collapse state
import React, { useState } from "react";
import TextTools from "../TextBox/TextTools";
import TextPanel from "../TextBox/TextPanel";
import CounterTools from "../Counter/CounterTools";
import CounterPanel from "../Counter/CounterPanel";
import ButtonTools from "../Button/ButtonTools";
import ButtonPanel from "../Button/ButtonPanel";
import ShapeTools from "../Shape/ShapeTools";
import ShapePanel from "../Shape/ShapePanel";
import ImageTools from "../Image/ImageTools";
import ImagePanel from "../Image/ImagePanel";
import { Panel } from "build-ui";


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
// import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
// import { RiPencilLine } from "react-icons/ri";
// import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const panel = {
    Counter: CounterPanel,
    Image: ImagePanel,
    Text: TextPanel,
    ButtonComp: ButtonPanel,
    Shape: ShapePanel
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? "" : "Components"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
            {menuCollapse ? (
              <FiArrowRightCircle/>
            ) : (
              <FiArrowLeftCircle/>
            )}
          </div>
          </SidebarHeader>
          <SidebarContent>
          <CounterTools />
            <TextTools />
            <ImageTools />
            <ButtonTools />
            <ShapeTools />
            {menuCollapse? (""):(<Panel view={panel} />)}
            
          </SidebarContent>

        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
