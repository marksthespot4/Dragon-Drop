import { useState } from "react"
import { Button } from "@material-ui/core"
import "../styles/button.css"
import interact from "interactjs"
import { dragMoveListener, resizeMoveListener } from "../hooks/interact-funcitons"

export const ButtonComp = ({buttonText = "Click Me!"
                        }) => {
    const buttonFunction = () => {
        alert("function done!");
    }

    interact('.button')
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
        <Button onClick={() => buttonFunction()} variant="contained" className="button">
            <div> {buttonText} </div>
        </Button>
    </div>
}
