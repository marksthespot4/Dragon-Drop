import { useRef } from "react";
import { DnDBuilderHOC } from "build-ui";
import useDragonEditor from "../../hooks/useDragonEditor";
import useStyle from "./style/CanvasView";
import Canvas from './Canvas'

const BuilderCanvas = DnDBuilderHOC(Canvas);

const CanvasView = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id,
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: true,
    });
    const ref = useRef();
    return <BuilderCanvas
        onDrop = {editor.handlePositionedDrop}
        onDragEnter = {editor.handlePaintDropZone}
        onDragLeave = {editor.handleEraseDropZone}
        onClick = {editor.handleSelect}
        className = {classes.view}
        ref = {ref}
        {...props}
    />
}

export default CanvasView;