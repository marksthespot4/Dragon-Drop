import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"
import interact from 'interactjs'

export const Image = ({imageUrl}) => {
    const update = () => (
        console.log(imageUrl)
    )

    const position = {x: 0, y: 0};

    interact('.image')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        autoScroll: true,

        listeners: {
            start (event) {
                console.log(event.type, event.target)
            },
            move (event) {
                position.x += event.dx;
                position.y += event.dy;

                event.target.style.transform = 'translate(${position.x}px, ${position.y}px)';
            },
        }
    });

    return <div>
            <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
        </div>
}
