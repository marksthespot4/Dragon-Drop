import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"
import interact from 'interactjs'
import { dragMoveListener, resizeMoveListener } from "../hooks/interact-funcitons"

export const Image = ({imageUrl}) => {
    const update = () => (
        console.log(imageUrl)
    )

    interact('.image')
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
            <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
        </div>
}
