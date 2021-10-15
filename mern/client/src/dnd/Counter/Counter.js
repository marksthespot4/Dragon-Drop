import { useState, useRef } from "react"
import { Button } from "@material-ui/core"

// import { SketchPicker } from 'react-color'
// import Color from "../color"
// import Form from 'react-bootstrap/Form'

export const Counter = ({initialCount = 0,
                         counterText = "My counter value is:",
                         onAdd = () => {},
                         onSubtract = () => {}
                         }) => {
    const [count, setCount] = useState(initialCount);
    const handleAdd = () => setCount(
        count => count + 1
    );
    const handleSubtract = () => setCount(
        count => count - 1
    );

    // const[color, setColor] = useState('white');

    return (
    <div>
        <Button variant="outlined" onClick = {handleSubtract}>
            -
        </Button>
        <span> {counterText} {count} </span>
        <Button variant="outlined" onClick = {handleAdd}>
            +
        </Button>
        {/* <div>
            <SketchPicker
                color={color}
                onChangeComplete= { (color) => {setColor(color.hex)}}
            />
            <div style={{color}}>sdfghjk</div>
        </div> */}
        {/* <Color></Color> */}
    </div>
    )
}
