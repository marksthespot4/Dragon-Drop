import {DnDBuilder, useEditor} from "build-ui";
import { Shape } from "./Shape";

const ShapeView = ({
                         id,
                         ...props
                     }) => {
    const handleButton = event => {
        event.stopPropagation();
    }
    const editor = useEditor({
        id: id
    });
    const {
        handlePanel,
        handleDragStart,
        handleDragEnd,
    } = editor;
    return <DnDBuilder
        onClick = {handlePanel}
        onDragStart = {handleDragStart}
        onDragEnd = {handleDragEnd}
        draggable = {true}
    >
        <Shape
            {...props}
        />
    </DnDBuilder>
}

export default ShapeView;