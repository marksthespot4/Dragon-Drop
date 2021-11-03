import { TextField, Button} from "@material-ui/core";
import {Stack} from "@mui/material"
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor, useActions} from "build-ui"
import { useState , useEffect} from "react";
import Color from "../color";

const ImagePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()
    const [textField, setTextField] = useState(editor.props.imageUrl)
    const [link, setLink] = useState(editor.props.extLink)
    const [fileUrl, setFileUrl] = useState(null)

    const handleSourceChange = () => {

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {imageUrl: textField, extLink:link}
        });
    }

    const imageFileUpload = event => {
        const url = URL.createObjectURL(event.target.files[0])
        console.log(url)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {imageUrl: url, extLink:link}
        });
    }

    // const actions = useActions()

    const [backColor, setBackColor] = useState(editor.props.backColor);
    const [textColor, setTextColor] = useState(editor.props.textColor);

    const handleBackColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {backColor: backColor}
        });
    }

    useEffect(() => { 
        handleBackColorChange();
    }, [backColor])

    const handleTextColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textColor: textColor}
        });
    }

    useEffect(() => { 
        handleTextColorChange();
    }, [textColor])

    return <div>
        <Stack>
            <span>Image Url</span>
        <TextField
            name = 'imageUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}} 
            />
        <Button onClick={handleSourceChange} variant="contained"> Upload new image </Button>
        <Button component="label" variant="contained"> 
            Upload from local
            <input type="file" onChange={imageFileUpload} hidden/>
        </Button>
        <span>External Link URL</span>
        <TextField
            name = 'extLink'
            value = {link}
            onChange = {(event) => {setLink(event.target.value)}}
            />
        </Stack>

        <div>
            Background Color
            <Color setColor={setBackColor}/> 
            Text Color
            <Color setColor={setTextColor}/>
        </div>

    </div>
}

export default ImagePanel;