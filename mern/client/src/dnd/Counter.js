import { useState } from "react"

export const Counter = ({initialCount = 0, counterText = "My counter value is:"},) => {
    const [count, setCount] = useState(initialCount);
    const handleAdd = () => setCount(
        count => count + 1
    );
    const handleSubtract = () => setCount(
        count => count - 1
    );

    return <div>
        <button onClick = {handleSubtract}>
            -
        </button>
        <span> {counterText} {count} </span>
        <button onClick = {handleAdd}>
            +
        </button>
    </div>
}
