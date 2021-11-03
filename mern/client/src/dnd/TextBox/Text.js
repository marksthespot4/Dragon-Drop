import { useState } from "react"
import React from "react";
import RichTextMenu from "./RichTextMenu";
import "../styles/TextStyles.css"
import {Rnd} from "react-rnd"
import { Button } from "@material-ui/core";

export const Text = ({titleText = "Insert title", mainText = "Insert text here", textBold, textItalicize, textUnderline, color}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    // const [color, setColor] = useState("#000000");

    return <Rnd default={{
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      }}
    ><div>
        {/* <h2 className="heading"> Hi this is some text </h2> */}
        <p>
        <div
            style={{
                fontWeight: textBold ? "bold" : "normal",
                fontStyle: textItalicize ? "italic" : "normal",
                textDecorationLine: textUnderline ? "underline" : "none"
            }}
        >
         <span className="ptag" 
            style={{
                color: color
            }}
        > 
            {mainText}
         </span>
        </div> 
        </p>
        
    </div>
    </Rnd>
}
//<button onClick={() => setBoldFont(!boldFont)}><strong>B</strong></button>