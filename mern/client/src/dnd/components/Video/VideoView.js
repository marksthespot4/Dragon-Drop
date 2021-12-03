import {DnDBuilder, DnDBuilderHOC, useEditor} from "build-ui";
import Resizable from "../../resizable/Resizable";
import useDragonEditor from "../../hooks/useDragonEditor"
import useDragonStyler from "../../hooks/useDragonStyler"
import Video from "./Video";
import useStyle from "./style/VideoView"

const BuilderVideo = DnDBuilderHOC(Video);

const VideoView = ({
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
        hovering: editor.hovering,
        fixed: editor.meta.fixed
    })

    return <BuilderVideo
        onClick = {editor.handleSelect}
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        draggable = {!editor.meta.fixed}
        // isResizing = {editor.indexes.selected}
        // onResizeStart = {editor.handleResizeStart}
        // onResize = {editor.handleResize}
        // onResizeEnd = {editor.handleResizeEnd}
        ref = {editor.builder}
        className = {classes.view}
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default VideoView;