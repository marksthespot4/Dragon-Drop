import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import useDragonEditor from "../../hooks/useDragonEditor";
import useDragonStyler from "../../hooks/useDragonStyler";
import useStyle from '../../panels/PanelStyle';
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";
import {ColorPanel, BackgroundPanel} from "../../panels/PalettePanel";


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
        <ColorPanel id = {id} />
        <BackgroundPanel id = {id} />
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default ButtonPanel;