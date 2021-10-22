import {Rectangle, Triangle, Circle} from 'react-shapes';
import {useState} from "react"
import {Button} from "@material-ui/core"
import shape from '@material-ui/core/styles/shape';
import {Rnd} from 'react-rnd';
import { Redirect } from 'react-router-dom';
document.addEventListener('contextmenu', function(event){
    event.preventDefault();})
export const Shape = ({
                        shapeType = "Rectangle",
                        shapeText = "Click Me!",
                        heightProp = 100,
                        widthProp = 200,
                        radius = 50
                      }) => {
    const [type, setType] = useState(shapeType);
    const [url, setUrl] = useState(shapeText);

    const newFunct = () =>
    {
        window.location.href = "https://google.com"
    }
    const returnShape = (props) => {
        if (shapeType=="Triangle")
        {
            return <Triangle onContextMenu={() => newFunct()} width = {widthProp} height={heightProp}>

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
    return <div>
        <Rnd
            default={{
                x: 0,
                y: 0,
                width: 320,
                height: 200,
            }}
        >
        {returnShape(url)}
        </Rnd>
    </div>
}