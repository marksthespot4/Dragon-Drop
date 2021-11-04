import { useState } from "react"
import React from "react";
import RichTextMenu from "./RichTextMenu";
import "./TextStyles.css"

export const Text = ({titleText = "Insert title", mainText = "Insert text here", textBold, textItalicize, textUnderline, color}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    // const [color, setColor] = useState("#000000");
    return <div>
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
}
//<button onClick={() => setBoldFont(!boldFont)}><strong>B</strong></button>