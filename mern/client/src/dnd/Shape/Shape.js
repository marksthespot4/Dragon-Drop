import {Rectangle, Triangle} from 'react-shapes';
import {useState} from "react"
import {Button} from "@material-ui/core"

export const Shape = ({
                          shapeType = "Rectangle",
                          shapeText = "Click Me!",
                          heightProp = 200,
                          widthProp = 300
                      }) => {
    const [type, setType] = useState(shapeType);

    return <div>
        <Rectangle width={widthProp} height={heightProp}>
            <div> {shapeText} </div>
        </Rectangle>
    </div>
}