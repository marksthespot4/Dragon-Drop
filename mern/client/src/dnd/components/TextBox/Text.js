import { useState } from "react"
import React from "react";
import RichTextMenu from "./RichTextMenu";
import "./TextStyles.css"
import {Rnd} from "react-rnd"
import {Button, TextField} from "@material-ui/core";

export const Text = ({titleText = "Insert title", linkText = "http://google.com", mainText = "Insert text here", textBold, textItalicize, textUnderline, color}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    // const [color, setColor] = useState("#000000");
    const openTab = () =>
    {
        var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(linkText);
        if (valid)
        {
            window.open(linkText);
        }
        else
        {
            alert("Please enter a valid http url.");
        }
    }

    return <div onContextMenu={() => openTab()}>
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
}
//<button onClick={() => setBoldFont(!boldFont)}><strong>B</strong></button>