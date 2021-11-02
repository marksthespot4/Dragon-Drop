import { useState } from "react"
import React from "react";
import RichTextMenu from "./RichTextMenu";
import "../styles/TextStyles.css"
import interact from "interactjs"
import { dragMoveListener, resizeMoveListener } from "../hooks/interact-funcitons";

export const Text = ({titleText = "Insert title", mainText = "Insert text here", textBold, textItalicize, textUnderline, color}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    // const [color, setColor] = useState("#000000");

    interact('.ptag')
    .draggable({

        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        listeners: {
            move (event) {
                dragMoveListener(event)
            }
        },
    })
    .resizable({
        edges: {left: true, right: true, bottom: true, top:true},

        modifiers: [
            interact.modifiers.restrictEdges({
                outer: 'parent'
            })
        ],

        listeners: {
            move (event) {
                resizeMoveListener(event)
            }
        }
    })

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