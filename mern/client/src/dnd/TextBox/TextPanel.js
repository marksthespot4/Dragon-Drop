import {useEditor, useActions} from "build-ui"
import Color from "../color";
import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form'

const TextPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()
    const [boldFont, setBoldFont] = useState(editor.props.textBold);
    const [underline, setUnderline] = useState(editor.props.textUnderline);
    const [italics, setItalics] = useState(editor.props.textItalicize);
    const [color, setColor] = useState(editor.props.color);

    const handleBoldChange = () => {
        setBoldFont(!boldFont)
        console.log(boldFont)
        
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textBold: boldFont}
        });
    }
    const handleItalicizeChange = () => {
        setItalics(!italics)
        console.log(italics)
        
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textItalicize: italics}
        });
    }
    const handleUnderlineChange = () => {
        setUnderline(!underline)
        console.log(underline)
        
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textUnderline: underline}
        });
    }
    const handleColorChange = (e) => {     
        setColor(e.target.value); 
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {color: color}
        });
    }
    return <div>
        <input
            type="text"
            class="textbox"
            name = 'mainText'
            value = {editor.props.mainText}
            onChange = {editor.handleUpdate}
        />
        <button onClick={handleBoldChange} variant="contained"><strong>B</strong></button>
        <button onClick={handleItalicizeChange} variant="contained"><em>I</em></button>
        <button onClick={handleUnderlineChange} variant="contained"><u>U</u></button>
        <Color onChange={handleColorChange}/>
        {/* <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue={color}
            title="Choose your color"
            value={color}
            onChange={(e) => handleColorChange(e)}
        /> */}
    </div>
}

export default TextPanel;