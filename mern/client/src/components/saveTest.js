// import React, { createRef, useEffect, useState } from "react";

// import { useScreenshot } from "use-react-screenshot";
// import Button from 'react-bootstrap/Button';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // import UserPage from "./user_page";
// import MyBuilder from "../dnd/MyBuilder";

// import { updatePage, getPage } from "./page";
// import { write } from "@popperjs/core";


// import axios from "axios";

// export default (props) => {
//   // console.log(props.match.params.id);
//   const [width, setWidth] = useState(400);
//   const [saveData, setSaveData] = useState(null);
//   const [prevSave, setPrevSave] = useState();

// //   useEffect(() => {
// //     getPage(props.match.params.id).then(data => {
// //         console.log(data.pagedata);
// //         setPrevSave(data.pagedata);
// //     }); 
// //   }, []);  

//   const getImage = (currTree) => {
//     setSaveData(currTree);
//   }

//   useEffect(() => {
//     save();
//   }, [saveData]);  

//   const save = () => {
//     getPage(props.match.params.id).then(data => {
//       updatePage(data.user, data.pagename, data.pub, saveData, null, data._id);
//     });

//   }

//   return (
//     <div>
//         <MyBuilder save={getImage} id={props.match.params.id}/>
//     </div>
//   );
// };