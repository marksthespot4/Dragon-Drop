import Input from "@mui/core/InputUnstyled";
import clsx from "clsx";
import useDragonEditor from "../hooks/useDragonEditor";
import useStyle from "./PanelStyle";

const ColorPanel = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id
    });
    const isHexColor = colorStr => (
        typeof colorStr === 'string' &&
        colorStr.length === 7 &&
        colorStr.startsWith('#') 
    );
    const color = (
        editor.props.style.color
    );
    const classes = useStyle();
    return <div {...props}>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.color'
            className = {classes.label}
        >
            Text Color
        </label>
        <Input
            type = 'color'
            name = 'style.color'
            id = 'style.color'
            value = {isHexColor(color) ? color : '#ffffff'}
            onChange = {editor.handleUpdate}
            className = {clsx(classes.input, classes.input_color)}
        />
        </div>

    </div>
}

const BackgroundPanel = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id
    });
    const isHexColor = colorStr => (
        typeof colorStr === 'string' &&
        colorStr.length === 7 &&
        colorStr.startsWith('#') 
    );
    const color = (
        editor.props.style.backgroundColor
    );
    const classes = useStyle();
    return <div {...props}>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.backgroundColor'
            className = {classes.label}
        >
            Background Color
        </label>
        <Input
            type = 'color'
            name = 'style.backgroundColor'
            id = 'style.backgroundColor'
            value = {isHexColor(color) ? color : '#ffffff'}
            onChange = {editor.handleUpdate}
            className = {clsx(classes.input, classes.input_color)}
        />
        </div>

    </div>
}

export {ColorPanel, BackgroundPanel}