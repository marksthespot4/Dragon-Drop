import { TextField, Button} from "@material-ui/core";
import {DropdownButton, Dropdown} from "react-bootstrap";
import Select from '@material-ui/core/Select';
//import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"
import Color from "../../color";

const ShapePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <TextField
            name = 'shapeText'
            value = {editor.props.shapeText}
            onChange = {editor.handleUpdate}
        />
        <Color/>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'shapeType'
            id = 'shapeType'
            value = {editor.props.shapeType || ''}
            onChange = {editor.handleUpdate}
        >
            <option value = 'Rectangle'>
                Rectangle
            </option>
            <option value = 'Triangle'>
                Triangle
            </option>
            <option value = 'Circle'>
                Circle
            </option>
        </Select>
    </div>
}

export default ShapePanel;