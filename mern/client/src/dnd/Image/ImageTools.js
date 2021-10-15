import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";

const ImageTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();

        const imageProps = {
            imageUrl: "https://e7.pngegg.com/pngimages/660/375/png-clipart-mario-mario.png"
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
        <Button> Add image </Button>
    </DnDBuilder>
}

export default ImageTools;