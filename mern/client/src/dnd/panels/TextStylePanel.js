import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import useDragonEditor from '../hooks/useDragonEditor';
import useStyle from "./PanelStyle";
import { Button } from "@material-ui/core";
import { useState } from 'react';
import { useActions } from 'build-ui';

const TextStylePanel = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id
    });
    const actions = useActions();
    const classes = useStyle();
    const [boldFont, setBoldFont] = useState(editor.props.textBold);
    const [underline, setUnderline] = useState(editor.props.textUnderline);
    const [italics, setItalics] = useState(editor.props.textItalicize);

    const handleBoldChange = () => {
        setBoldFont(!boldFont);
        console.log(boldFont)
        const updateStyle = {
            fontWeight: boldFont ? 'bold' : 'normal'
        };

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {style: updateStyle, textBold: boldFont}
        });
    }

    const handleItalicizeChange = () => {
        setItalics(!italics)
        console.log(italics)
        const updateStyle = {
            fontStyle: italics ? 'italic' : 'normal'
        };

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {style: updateStyle, textItalicize: italics}
        });
    }
    const handleUnderlineChange = () => {
        setUnderline(!underline)
        console.log(underline)
        const updateStyle = {
            textDecorationLine: underline ? 'underline' : 'none'
        };

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {style: updateStyle, textUnderline: underline}
        });
    }
    return <div {...props}>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.fontFamily'
            className = {classes.label}
        >
            Text Style
        </label>    
        <Button
            variant = 'contained'
            name = 'textBold'
            id = 'textBold'
            value = {editor.props.textBold || ''}
            onClick = {handleBoldChange}
            className = {classes.input}>
            <strong>B</strong>
        </Button>
        <Button
            variant = 'contained'
            name = 'textItalicize'
            id = 'textItalicize'
            value = {editor.props.textItalicize || ''}
            onClick = {handleItalicizeChange}
            className = {classes.input}>
            <em>I</em>
        </Button>
        <Button
            variant = 'contained'
            name = 'textUnderline'
            id = 'textUnderline'
            value = {editor.props.textUnderline || ''}
            onClick = {handleUnderlineChange}
            className = {classes.input}>
            <u>U</u>
        </Button>
        
        </div>

        <div className = {classes.field}>
        <label 
            htmlFor = 'style.fontFamily'
            className = {classes.label}
        >
            Text Font
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.fontFamily'
            id = 'style.fontFamily'
            value = {editor.props.style.fontFamily || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'Times New Roman'>
                Times New Roman
            </option>
            <option value = 'Courier New'>
                Courier New
            </option>
            <option value = 'Roboto'>
                Roboto
            </option>
            <option value = 'KoHo'>
                KoHo
            </option>
        </Select>
        </div>
    
        <div className = {classes.field}>
        <label 
            htmlFor = 'style.textAlign'
            className = {classes.label}
        >
            Text Align
        </label>
        <Select
            variant = 'outlined'
            native = {true}
            name = 'style.textAlign'
            id = 'style.textAlign'
            value = {editor.props.style.textAlign || ''}
            onChange = {editor.handleUpdate}
            className = {classes.input}
        >
            <option value = 'left'>
                Left
            </option>
            <option value = 'center'>
                Center
            </option>
            <option value = 'right'>
                Right
            </option>
            <option value = 'justify'>
                Justify
            </option>
        </Select>
        </div>

    </div>
}

export default TextStylePanel;