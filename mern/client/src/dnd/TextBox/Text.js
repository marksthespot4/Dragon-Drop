import { useState } from "react"
import RichTextMenu from "./RichTextMenu";
import "../styles/TextStyles.css"
import interact from "interactjs"
import { dragMoveListener, resizeMoveListener } from "../hooks/interact-funcitons";

export const Text = ({titleText = "Insert title", mainText = "Insert text here"}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    //alert(JSON.stringify(mainText));

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
        <span className="ptag"> {mainText} </span>
        </p>
        <RichTextMenu input = {JSON.stringify(mainText)}>
        </RichTextMenu>
    </div>
}
