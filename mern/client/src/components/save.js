import React, { createRef, useEffect, useState } from "react";

import { useScreenshot } from "use-react-screenshot";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import UserPage from "./user_page";
import MyBuilder from "../dnd/MyBuilder";

import { updatePage, getPage } from "./page";
import { write } from "@popperjs/core";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import axios from "axios";

export default (props) => {
  // console.log(props.match.params.id);
  const ref = createRef(null);
  const [width, setWidth] = useState(400);
  const [image, takeScreenShot] = useScreenshot();
  const [saveData, setSaveData] = useState(null);

  const getImage = (currTree) => {
    setSaveData(currTree);
    takeScreenShot(ref.current);
    notify();
  }

  useEffect(() => { 
    save();
  }, [image])

  const notify = () => { 
    toast.success('Project Saved');
  }

  const save = () => {
    // html2canvas(document.querySelector("#capture")).then(canvas => {
    //   document.body.appendChild(canvas)
    // });
    if(saveData != null) {
      getPage(props.match.params.id).then(data => {
        updatePage(data.user, data.pagename, data.pub, saveData, image, data._id);
      });
    }
  }

  return (
    <div>
      <div align="right">
          <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </div>
      {/* <img width={width} src={image} alt={""} /> */}
      {/* <div>{image}</div> */}
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >
       <MyBuilder save={getImage} id={props.match.params.id}/>
      </div>
      {/* <div id="capture">
        <MyBuilder save={getImage} id={props.match.params.id}/>
      </div> */}
    </div>
  );
};