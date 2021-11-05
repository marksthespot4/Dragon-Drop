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
            <option value = 'https://www.clker.com/cliparts/v/C/Y/S/3/P/black-rectangle-hi.png'>
                Rectangle
            </option>
            <option value = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7cb840e-b11f-4cd7-aec2-c32840386112/d5dg6kv-d32dc285-3b4e-49b6-b3e0-e88b6c9102e1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hN2NiODQwZS1iMTFmLTRjZDctYWVjMi1jMzI4NDAzODYxMTIvZDVkZzZrdi1kMzJkYzI4NS0zYjRlLTQ5YjYtYjNlMC1lODhiNmM5MTAyZTEucG5nIn1dXX0.oGbJfiTMj4g2HbQ2YuydLTvQLBoHdFUQlPX87IbUR_8'>
                Triangle
            </option>
            <option value = 'https://i0.wp.com/www.medassurance.com/wp-content/uploads/2015/06/black-circle.png?ssl=1'>
                Circle
            </option>
            <option value = 'https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png'> Square </option>
            <option value = 'https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png'> Star </option>
        </Select>
        <div>
            Color
            <Color setColor={setColor}/> 
        </div>

    </div>
}

export default ShapePanel;