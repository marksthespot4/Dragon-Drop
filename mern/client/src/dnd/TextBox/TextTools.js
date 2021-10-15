import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const TextTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const TextProps = {
            Title: "Insert Title",
            mainText: 'Insert body text'
        }
        const text = item({
            type: 'Text',
            props: TextProps
        })
        const data = branch(text);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        <Button>Text </Button>
    </DnDBuilder>
}

export default TextTools;