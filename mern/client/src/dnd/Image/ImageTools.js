import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";

const ImageTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();

        const imageProps = {
            imageUrl: "https://pngimg.com/uploads/mario/mario_PNG55.png",
            extLink: "https://youtube.com"
        }
        const image = item({
            type: 'Image',
            props: imageProps
        })
        const data = branch(image);
        console.log(image.props)
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