import { TextField, Button} from "@material-ui/core";
import {DropdownButton, Dropdown} from "react-bootstrap";
import Select from '@material-ui/core/Select';
//import { DeleteIcon } from "@material-ui/icons/Delete"
import Color from "../../color";
import { useState, useEffect } from "react";
import {useActions } from "build-ui"
import useDragonEditor from "../../hooks/useDragonEditor";
import { BackgroundPanel, ColorPanel } from "../../panels/PalettePanel";
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";

const ShapePanel = ({id}) => {
    const actions = useActions();
    const editor = useDragonEditor({
        id: id
    })


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
            <option value = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/A_sample_of_the_transparent_rectangle.svg'>
                Rectangle
            </option>
            <option value = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Simple_triangle.svg'>
                Triangle
            </option>
            <option value = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg'>
                Circle
            </option>
        </Select>
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />
        <BackgroundPanel id = {id} />
    </div>
}

export default ShapePanel;