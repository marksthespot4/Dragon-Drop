import TextField from "@material-ui/core/TextField";
import useDragonEditor from "../hooks/useDragonEditor";
import useStyle from "./PanelStyle";

const SizingPanel = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id
    });
    const classes = useStyle();
    return <div {...props}>
        <div className = {classes.field}>
            <label
                htmlFor = 'style.width'
                className  = {classes.label}
            >
                Width
            </label>
            <TextField
            variant = 'outlined'
            name = 'style.width'
            id = 'style.width'
            value = {editor.props.style.width || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
            />
        </div>
        <div className = {classes.field}>
        <label 
            htmlFor = 'style.height'
            className = {classes.label}
        >
            Height
        </label>
        <TextField
            variant = 'outlined'
            name = 'style.height'
            id = 'style.height'
            value = {editor.props.style.height || ''}
            onChange = {editor.handleUpdate} 
            className = {classes.input}
        />
        </div>
    </div>
}

export default SizingPanel;