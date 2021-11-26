import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const ShapeTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const shapeStyle = {
            height: '200px',
            width: '200px'
        }

        const shapeProps = {
            shapeType: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/A_sample_of_the_transparent_rectangle.svg/2560px-A_sample_of_the_transparent_rectangle.svg.png",
            shapeText: 'http://google.com',
            style: shapeStyle
        }
        const shape = item({
            type: 'Shape',
            props: shapeProps
        });
        const data = branch(shape);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        <Button>Shape</Button>
    </DnDBuilder>
}

export default ShapeTools;