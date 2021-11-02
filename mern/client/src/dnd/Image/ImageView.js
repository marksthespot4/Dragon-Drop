import {DnDBuilder, DnDBuilderHOC, useEditor} from "build-ui";
import Resizable from "../resizable/Resizable";
import useDragonEditor from "../hooks/useDragonEditor"
import {Image} from "./Image";

const BuilderImage = DnDBuilderHOC(Image);

const ImageView = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id,
    });

    return <BuilderImage
        onClick = {editor.handleSelect}
        onDragStart = {editor.handlePositionedDragStart}
        onDragEnd = {editor.handleDragEnd}
        draggable = {true}
        isResizing = {editor.indexes.selected}
        onResizeStart = {editor.handleResizeStart}
        onResize = {editor.handleResize}
        onResizeEnd = {editor.handleResizeEnd}
        ref = {editor.builder}
        {...props}
    />
}

export default ImageView;