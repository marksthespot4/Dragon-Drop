import { TextField, Button} from "@material-ui/core";
import {Stack} from "@mui/material"
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useActions} from "build-ui"
import useDragonEditor from "../hooks/useDragonEditor"
import { useState } from "react";

const ImagePanel = ({id}) => {
    const actions = useActions();
    const editor = useDragonEditor({
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

    const handleChange = event => {
        setSource(event.target.value);
    }

    return <div>
        <Stack>
            <span>Image Url</span>
        <TextField
            name = 'imageUrl'
            value = {source}
            onChange={handleChange}
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

    </div>
}

export default ImagePanel;