// import React, { Component, useState } from "react";
// import SwitchButton from "./switch_button";


// export default class PageTest extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {pageNumber: "", pub: false};
//         this.handleChange = this.handleChange.bind(this);
//       }

//     componentDidMount() {
//         axios
//             .get("http://localhost:5000/page/" + id)
//             .then((response) => {
//                 this.setState({pageNumber: response.data.pageNumber, pub: response.data.pub});
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//     // updatePub(id) {
//     //     axios.get("http://localhost:5000/page/" + id).then((response) => {
//     //         console.log(response.data[0].pub);
//     //     });
//     // }


//     render() {
//         return (
//             <div className="col">
//                 <div className="container-fluid">
//                     <h2>Project {props.page.pageNumber}</h2>
//                     <img src={example} className="yellowOutline float-start" alt={props.page.pageNumber}/>

//                     <div className="dropdown float-start">
//                         <i className="bi bi-gear btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button"
//                         data-bs-toggle="dropdown" aria-expanded="false">
//                             <span className="visually-hidden"> Toggle Dropdown</span>
//                         </i>
//                         <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                             <li><a className="dropdown-item" href="/edit_page">Edit</a></li>
//                             <li><a className="dropdown-item" href="#">Download</a></li>
//                             <li><a className="dropdown-item" href="#">Download as Image </a></li>
//                             {/* <li><a className="dropdown-item" href ="#" onClick={() => props.deletePage(props.page._id)}>Delete</a></li> */}
//                         </ul>
//                     </div>
//                     <SwitchButton>
//                     </SwitchButton>

//                 </div>
//             </div>
//         );
//     }
// }
