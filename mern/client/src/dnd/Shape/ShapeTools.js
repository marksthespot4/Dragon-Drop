import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const ShapeTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const shapeProps = {
            shapeType: "Rectangle",
            shapeText: 'http://google.com',
            heightProp: 100,
            widthProp: 200,
            radius: 50,
            color: "#000000"
        }
        const shape = item({
            type: 'Shape',
            props: shapeProps
        })
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