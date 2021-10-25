import { TextField, Button} from "@material-ui/core";
import {Stack} from "@mui/material"
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor, useActions} from "build-ui"
import { useState } from "react";

const ImagePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()
    const [textField, setTextField] = useState(editor.props.imageUrl)
    const [link, setLink] = useState(editor.props.extLink)

    const handleSourceChange = () => {
        console.log(textField)
        console.log(link)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {imageUrl: textField, extLink:link}
        });
    }

    return <div>
        <Stack>
            <span>Image Url</span>
        <TextField
            name = 'imageUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}} 
            />
        <Button onClick={handleSourceChange} variant="contained"> Upload new image </Button>
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