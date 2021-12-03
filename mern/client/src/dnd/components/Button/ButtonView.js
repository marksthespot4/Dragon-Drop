import { DnDBuilderHOC } from "build-ui";
import useDragonEditor from "../../hooks/useDragonEditor";
import useDragonStyler from "../../hooks/useDragonStyler";
import ButtonMain from "./ButtonMain";
import useStyle from "./style/ButtonView";
import Resizable from "../../resizable/Resizable";

//const ResizableButton = Resizable(ButtonMain);
const BuilderButton = DnDBuilderHOC(ButtonMain);

const ButtonView = ({
                         id,
                         ...props
                     }) => {
    const handleButton = event => {
        event.stopPropagation();
    }
    const editor = useDragonEditor({
        id: id
    });
    const styler = useDragonStyler({
        id: id,
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        //hovering: editor.hovering,
        fixed: editor.meta.fixed,
    })
    return <BuilderButton
    onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
    onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
    draggable = {!editor.meta.fixed}
    isResizing = {editor.indexes.selected}
    onResizeStart = {editor.handleResizeStart}
    onResize = {editor.handleResize}
    onResizeEnd = {editor.handleResizeEnd}
    onContextMenu = {editor.handleSelect}
    className = {classes.view}
    {...props}
    style = {styler.completeStyle(props.style)}
    />
}

export default ButtonView;