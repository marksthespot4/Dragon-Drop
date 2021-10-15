import { useState } from "react"
import { Button } from "@material-ui/core"
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
        count => count - 1
    );

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
    </div>
    </Rnd>
    )
}
