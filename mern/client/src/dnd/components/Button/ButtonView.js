import { DnDBuilderHOC } from "build-ui";
import useDragonEditor from "../../hooks/useDragonEditor";
import useDragonStyler from "../../hooks/useDragonStyler";
import Button from "./Button";
import useStyle from "./style/ButtonView";

const BuilderButton = DnDBuilderHOC(Button);

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
        fixed: editor.meta.fixed,
    })
    return <BuilderButton
    onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
    onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
    draggable = {!editor.meta.fixed}
    onClick = {editor.handleSelect}
    className = {classes.view}
    {...props}
    style = {styler.completeStyle(props.style)}
    />
}

export default ButtonView;