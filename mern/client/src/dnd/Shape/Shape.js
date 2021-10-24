import {Rectangle, Triangle, Circle} from 'react-shapes';
import {useState} from "react"
import {Button} from "@material-ui/core"
import shape from '@material-ui/core/styles/shape';
import interact from "interactjs"
import { dragMoveListener, resizeMoveListener } from '../hooks/interact-funcitons';
import "../styles/shapes.css"

export const Shape = ({
                        shapeType = "Rectangle",
                        shapeText = "Click Me!",
                        heightProp = 100,
                        widthProp = 200,
                        radius = 50
                      }) => {
    const [type, setType] = useState(shapeType);

    interact('.shape')
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
                var target = event.target
                var x = (parseFloat(target.getAttribute('data-x')) || 0)
                var y = (parseFloat(target.getAttribute('data-y')) || 0)
            
                target.style.width = event.rect.width + 'px'
                target.style.height = event.rect.height + 'px'
            
                x += event.deltaRect.left
                y += event.deltaRect.top
            
                target.style.transform = 'translate(' + x + 'px,' + y + 'px)'
            
                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)
                heightProp = y
                widthProp = x
            }
        }
    })

    const returnShape = () => {
        if (shapeType=="Triangle")
        {
            return <Triangle width = {widthProp} height={heightProp}>

            </Triangle>

        }
        else if (shapeType=="Circle")
        {
            return <Circle r={radius}>

            </Circle>
        }
        else
        {
            return <Rectangle width={widthProp} height={heightProp}>

            </Rectangle>
        }
    }
    return <div className="shape">
        {returnShape()}
    </div>
}