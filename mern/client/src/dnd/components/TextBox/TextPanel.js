import {useEditor, useActions} from "build-ui"
import Color from "../../color";
import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { TextField} from "@material-ui/core";

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
    const handleColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {color: color}
        });
    }

    useEffect(() => { 
        handleColorChange();
    }, [color])

    return <div>
        <input
            type="text"
            class="textbox"
            name = 'mainText'
            value = {editor.props.mainText}
            onChange = {editor.handleUpdate}
        />
        <Button size="sm" onClick={handleBoldChange}><strong>B</strong></Button>
        <Button size="sm" onClick={handleItalicizeChange}><em>I</em></Button>
        <Button size="sm" onClick={handleUnderlineChange}><u>U</u></Button>
        <div>
            Color
            <Color setColor={setColor}/>
        </div>
        <span>External Url</span>
        <TextField
            name = 'linkText'
            value = {editor.props.linkText}
            onChange = {editor.handleUpdate}
        />
        {/* <div>{color}</div> */}
    </div>
}

export default TextPanel;