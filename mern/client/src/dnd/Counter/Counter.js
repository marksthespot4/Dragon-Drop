import { useState } from "react"
import { Button } from "@material-ui/core"

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

    return <div>
        <Button variant="outlined" onClick = {handleSubtract}>
            -
        </Button>
        <span> {counterText} {count} </span>
        <Button variant="outlined" onClick = {handleAdd}>
            +
        </Button>
    </div>
}
