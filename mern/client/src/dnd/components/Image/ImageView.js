import {DnDBuilder, DnDBuilderHOC, useEditor} from "build-ui";
import Resizable from "../../resizable/Resizable";
import useDragonEditor from "../../hooks/useDragonEditor"
import useDragonStyler from "../../hooks/useDragonStyler"
import Image from "./Image";
import useStyle from "./style/ImageView"

const ResizableImage = Resizable(Image);
const BuilderImage = DnDBuilderHOC(ResizableImage);

const ImageView = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id,
    });
    const styler = useDragonStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
    })

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
        className = {classes.view}
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default ImageView;