import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";

const ImageTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        // const imageProps = {
        //     initialCount: 0,
        //     counterText: 'My value is:'
        // }
        const image = item({
            type: 'Image',
        })
        const data = branch(image);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        <Button>Add image </Button>
    </DnDBuilder>
}

export default ImageTools;