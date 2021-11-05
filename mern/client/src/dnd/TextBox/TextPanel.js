import {useEditor, useActions} from "build-ui"
import Color from "../color";
import React from "react";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { TextField} from "@material-ui/core";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const TextPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()
    const [boldFont, setBoldFont] = useState(editor.props.textBold);
    const [underline, setUnderline] = useState(editor.props.textUnderline);
    const [italics, setItalics] = useState(editor.props.textItalicize);
    const [color, setColor] = useState(editor.props.color);
    const [font, setFont] = useState(editor.props.textFont);
    const [size, setSize] = useState(editor.props.textSize);

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

    // const handleSizeChange = () => {
    //     setSize(size)
    //     console.log(size)
        
    //     actions.timeBatched.triggerUpdate({
    //         id: id,
    //         props: {textSize: size}
    //     });
    // }

    const handleFontChange = () => {
        // setFont(font=> e);
        console.log(font)
        
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textFont: font}
        });
    }

    useEffect(() => { 
        handleFontChange();
    }, [font])

    const handleAdd = () => {
        setSize(size => size + 1);
    actions.timeBatched.triggerUpdate({
        id: id,
        props: {textSize: size}
    });
    }
    const handleSubtract = () => {
        setSize(size => size - 1);
    actions.timeBatched.triggerUpdate({
        id: id,
        props: {textSize: size}
    });
    }

    // const handleSizeChange = (e) => {
    //     setSize(size => e.target.value);
    // actions.timeBatched.triggerUpdate({
    //     id: id,
    //     props: {textSize: size}
    // });
    // }

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
        <DropdownButton id="dropdown-basic-button" title={font} size="sm">
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Arial</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Baskerville</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Courier</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Damascus</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Futura</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Georgia</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Helvetica</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Palatino</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Times New Roman</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => setFont(e.target.textContent)}>Verdana</div></Dropdown.Item>
        </DropdownButton>
        <Button variant="outlined" onClick = {handleSubtract} size="sm">
            -
        </Button>
        <span>
            {size}
        </span>
        {/* <input
            type="number"
            placeholder={size}
            onChange={handleSizeChange}
        >
        </input> */}
        <Button variant="outlined" onClick = {handleAdd} size="sm">
            +
        </Button>
        
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