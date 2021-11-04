import { TextField, Button} from "@material-ui/core";
import {DropdownButton, Dropdown} from "react-bootstrap";
import Select from '@material-ui/core/Select';
//import { DeleteIcon } from "@material-ui/icons/Delete"
import Color from "../../color";
import { useState, useEffect } from "react";
import { useEditor, useActions } from "build-ui"

const ShapePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()

    const [color, setColor] = useState(editor.props.color);

    const handleBackColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {color: color}
        });
    }

    useEffect(() => { 
        handleBackColorChange();
    }, [color])

    return <div>
        <input
            name = 'shapeText'
            value = {editor.props.shapeText}
            onChange = {editor.handleUpdate}
        />
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
        <div>
            Color
            <Color setColor={setColor}/> 
        </div>

    </div>
}

export default ShapePanel;