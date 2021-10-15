import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const CounterTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const counterProps = {
            initialCount: 0,
            counterText: 'My value is:'
        }
        const counter = item({
            type: 'Counter',
            props: counterProps
        })
        const data = branch(counter);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        <Button>Counter</Button>
    </DnDBuilder>
}

export default CounterTools;