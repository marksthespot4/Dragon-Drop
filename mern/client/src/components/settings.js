import React, { Component }  from "react";
import SettingsTabs from "./SettingsTabs";

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
}
  render() {
    return (      
      <div className="Settings">
        <SettingsTabs email={this.props.email} setEmail={this.props.setEmail}/>
      </div>
    );  
 }
}
export default Settings;
//  <SideBar items={items}/> 
// was line 13
