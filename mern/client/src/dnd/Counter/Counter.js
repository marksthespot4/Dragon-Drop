import { useState, useRef } from "react"
import { Button } from "@material-ui/core"
import Color from "../color";

// import { SketchPicker } from 'react-color'
// import Color from "../color"
// import Form from 'react-bootstrap/Form'
import {Rnd} from "react-rnd"

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
        console.log(counterText),
        count => count - 1
    );

    const state = {
        color: ""
    }

    // callback = (child) => {
    //     this.setState({color:child})
    // }

    // const[color, setColor] = useState('white');

    return (
    <Rnd default={{
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      }}
    >
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
        {/* <Color pCallback = {this.callback}/>
        <div> {this.state.color} </div> */}
    </div>
    </Rnd>
    )
}
