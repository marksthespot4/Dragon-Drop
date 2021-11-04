import React, { Component }  from "react";
import PanelPage from "./PanelPage";
import SideBar from "./SideBar";
import Switch from "react-switch";
import TabsDefault from "./TabsDefault";

const items = [
  { name: 'email', label: 'Change email' },
  { name: 'password', label: 'Change password' },
  { name: 'privacy', label: 'Change privacy' }]

class Settings extends Component {  
  constructor(props) {
        
    super(props);        
    var email;
    if(this.props.email != "") {
        email = this.props.email; 
        localStorage.setItem( 'localEmail', email);
    }
    else {
        email = localStorage.getItem( 'localEmail' );
    }
    alert(email);
}
  render() {
    return (      
      <div className="Settings">
        <TabsDefault email={this.props.email}/>
      </div>
    );  
 }
}
export default Settings;
//  <SideBar items={items}/> 
// was line 13
