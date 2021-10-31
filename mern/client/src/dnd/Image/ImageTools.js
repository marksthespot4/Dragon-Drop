import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";

const ImageTools = () => {
    const tools = useTools();
    const handleDragTool = () => {

        const imageProps = {
            src: "https://pngimg.com/uploads/mario/mario_PNG55.png",
            height: 200,
            width: 200
        }
        const image = item({
            type: 'Image',
            props: imageProps
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
        <Button> Image </Button>
    </DnDBuilder>
}

export default ImageTools;