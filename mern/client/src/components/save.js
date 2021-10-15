import React, { createRef, useState } from "react";

import { useScreenshot } from "use-react-screenshot";
import Button from 'react-bootstrap/Button';
import MyBuilder from "../dnd/MyBuilder";

// import UserPage from "./user_page";

export default () => {
  const ref = createRef(null);
  const [width, setWidth] = useState(300);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => takeScreenShot(ref.current);

  return (
    <div>
      <div>
        <Button onClick={getImage}>
          Take screenshot
        </Button>
        <label style={{ display: "block", margin: "10px 0" }}>
          Width:
          <input value={width} onChange={e => setWidth(e.target.value)} />
        </label>
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

        {/* <h1>Lorem ipsum</h1>
        <h3>What is Lorem Ipsum?</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
        </p> */}
        <MyBuilder></MyBuilder>
          </div>
    </div>
  );
};
