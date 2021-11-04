import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const ButtonTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const buttonProps = {
            buttonText: 'Click Me!'
        }
        const button = item({
            type: 'ButtonComp',
            props: buttonProps
        })
        const data = branch(button);
        tools.triggerDragStart({
            data: data
        });
        // console.log(data);
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        <Button>Button</Button>
    </DnDBuilder>
}

export default ButtonTools;