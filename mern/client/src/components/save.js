import React, { createRef, useState } from "react";

import { useScreenshot } from "use-react-screenshot";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import UserPage from "./user_page";
import MyBuilder from "../dnd/MyBuilder";

export default () => {
  const ref = createRef(null);
  const [width, setWidth] = useState(400);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => {
    takeScreenShot(ref.current);
  }

  // const [show, setShow] = useState(false);

  const notify = () => { 
    toast.success('Project Saved');
  }

  return (
    <div>
      <div align="right">
          <Button onClick={() => {
            getImage();
            notify();
            }}>
            Save
          </Button>
          {/* <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast> */}
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
        {/* <label style={{ display: "block", margin: "10px 0" }}>
          Width:
          <input value={width} onChange={e => setWidth(e.target.value)} />
        </label> */}
      </div>
      <img width={width} src={image} alt={"ScreenShot"} />
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >

        {/* CONTENT THAT WILL BE SCREENSHOTTED, PUT PROJECT VIEW PAGE HERE */}

        <MyBuilder></MyBuilder>
          </div>
    </div>
  );
};