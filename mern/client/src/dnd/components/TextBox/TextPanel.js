import TextField from '@material-ui/core/TextField';
import useDragonEditor from '../../hooks/useDragonEditor';
import useDragonStyler from '../../hooks/useDragonStyler';
import useStyle from './style/TextPanel';
import FontPanel from '../../panels/FontPanel';
import {ColorPanel} from '../../panels/PalettePanel';
import PositionPanel from '../../panels/PositionPanel';
import SizingPanel from '../../panels/SizingPanel';

const TextPanel = ({
    id,
}) => {
    const editor = useDragonEditor({
        id: id
    });
    const styler = useDragonStyler({
        id: id
    });
    const classes = useStyle();
    return <div>

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

    </div> 
}

export default TextPanel;