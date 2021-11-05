import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import useDragonEditor from "../../hooks/useDragonEditor";
import useDragonStyler from "../../hooks/useDragonStyler";
import useStyle from '../../panels/PanelStyle';
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";


const ButtonPanel = ({
    id,
}) => {
    const editor = useDragonEditor({
        id: id,
    });
    const styler = useDragonStyler({
        id: id,
    })
    const hasHref = Boolean(editor.props.href);
    const [hasLink, setHasLink] = useState(hasHref);
    const handleAsLink = event => (
        setHasLink(event.target.checked)
    );
    const classes = useStyle();
    return <div>
        
        <div className = {classes.field}>
        <label 
            htmlFor = 'text'
            className = {classes.label}
        >
            Button Text
        </label>
        <TextField
            variant = 'outlined'
            name = 'text'
            id = 'text'
            value = {editor.props.text}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        />
        </div>

        <div className = {classes.field}>
        <label
            htmlFor = 'color'
            className = {classes.label}
        >
            Type
        </label>
        <Select
            variant = 'outlined'
            native = {true} 
            value = {editor.props.color}
            id = 'color'
            name = 'color' 
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'primary'>
                Primary
            </option>
            <option value = 'secondary'>
                Secondary
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'variant'
            className = {classes.label}
        >
            Fill
        </label>
        <Select 
            variant = 'outlined'
            native = {true}
            value = {editor.props.variant} 
            name = 'variant'
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'contained'>
                Contained
            </option>
            <option value = 'outlined'>
                Outlined
            </option>
        </Select>
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'has_link'
            className = {classes.label}
        >
            Link?
        </label>
        <span className = {classes.input}>
            <Checkbox
                id = 'has_link'
                checked = {hasLink}
                onChange = {handleAsLink}
            />
        </span>
        </div>

        {hasLink && <React.Fragment>
            <div className = {classes.field}>
            <label 
                htmlFor = 'href'
                className = {classes.label}
            >
                Button Link
            </label>
            <TextField
                variant = 'outlined'
                name = 'href'
                id = 'href'
                value = {editor.props.href || ''}
                onChange = {editor.handleUpdate}
                className = {classes.input}
            />
            </div>
        </React.Fragment>}
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default ButtonPanel;