import TextField from '@material-ui/core/TextField';
import useDragonEditor from '../../hooks/useDragonEditor';
import useDragonStyler from '../../hooks/useDragonStyler';
import useStyle from './style/TextPanel';
import FontPanel from '../../panels/FontPanel';
import {ColorPanel} from '../../panels/PalettePanel';
import PositionPanel from '../../panels/PositionPanel';
import SizingPanel from '../../panels/SizingPanel';
import { useState } from 'react';
import { useActions } from 'build-ui';
import Button from 'react-bootstrap/Button';
import TextStylePanel from '../../panels/TextStylePanel';

const TextPanel = ({
    id,
}) => {
    const actions = useActions();
    const editor = useDragonEditor({
        id: id
    });
    const styler = useDragonStyler({
        id: id
    });
    const [link, setLink] = useState(editor.props.extLink)
    const handleSourceChange = () => {

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {extLink:link}
        });
    }

    const classes = useStyle();
    return <div>
        <span>External Link URL</span>
        <input
            name = 'extLink'
            value = {link}
            onChange = {(event) => {setLink(event.target.value)}}
            />
        <Button onClick={handleSourceChange} variant="contained"> Update Link </Button>
        <div className = {classes.field}>
        
        <label 
            htmlFor = 'text'
            className = {classes.label}
        >
            Text
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

        <ColorPanel id = {id} />
        <FontPanel id = {id} />
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />
        <TextStylePanel id = {id} />

    </div> 
}

export default TextPanel;