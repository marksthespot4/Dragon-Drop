import React, { createRef, useEffect, useState } from "react";

import { useScreenshot } from "use-react-screenshot";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import UserPage from "./user_page";
import MyBuilder from "../dnd/MyBuilder";

import { updatePage, getPage } from "./page";
import { write } from "@popperjs/core";

export default (props) => {
  console.log(props.match.params.id);
  const ref = createRef(null);
  const [width, setWidth] = useState(400);
  const [image, takeScreenShot] = useScreenshot();
  const [imgFromDB, setDBImage] = useState(image);
  const [saveData, setSaveData] = useState(null);
  const [prevSave, setPrevSave] = useState();

  //Why does the following code cause an infinite render???
  // useEffect(() => {
  //   getPage(props.match.params.id).then(data => {
  //     setPrevSave(data.pagedata);
  //   }); 
  // }, []);

  const getImage = (currTree) => {
    setSaveData(currTree);
    takeScreenShot(ref.current);
    notify();
  }

  useEffect(() => { 
    save();
  }, [image])

  // const [show, setShow] = useState(false);

  const notify = () => { 
    toast.success('Project Saved');
  }

  const save = () => {
    //saving MyBuilder in DB saves null
    // console.log(MyBuilder);
    getPage(props.match.params.id).then(data => {
      updatePage(data.user, data.pagename, data.pub, saveData, image, data._id);
      // setPrevSave(saveData);
    });
    getPage(props.match.params.id).then(data => {
      // console.log(data.pagedata);
    });
  }

  function test() {
    console.log(test);
  }

  return (
    <div>
      <div align="right">
          <Button onClick={() => {
            getImage();
            // notify();
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
      <img width={width} src={image} alt={""} />
      {/* <div>{image}</div> */}
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >

        {/* CONTENT THAT WILL BE SCREENSHOTTED, PUT PROJECT VIEW PAGE HERE */}

        {/* <MyBuilder setTreeS={setTreeS}></MyBuilder> */}
        <MyBuilder save={getImage} prevSave={prevSave}/>
      </div>
    </div>
  );
};