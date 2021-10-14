import {Rectangle, Triangle, Circle} from 'react-shapes';
import {useState} from "react"
import {Button} from "@material-ui/core"

export const Shape = ({
                          shapeType = "Rectangle",
                          shapeText = "Click Me!",
                          heightProp = 100,
                          widthProp = 200,
                            radius = 50
                      }) => {
    const [type, setType] = useState(shapeType);

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
    return <div>
        {returnShape()}
        <h1>{shapeText}</h1>
    </div>
}