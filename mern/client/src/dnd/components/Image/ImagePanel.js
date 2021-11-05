import {Stack} from "@mui/material"
import useDragonEditor from "../../hooks/useDragonEditor"
import {useActions} from "build-ui"
import { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";

const ImagePanel = ({id}) => {
    const actions = useActions();
    const editor = useDragonEditor({
        id: id
    })

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

    return <div>
        <Stack>
            <span>Image Url</span>
        <input
            name = 'imageUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}}
            />
        <Button onClick={handleSourceChange}> Upload new image </Button>
        <Button component="label"> 
            Upload from local
            <input type="file" onChange={imageFileUpload} />
        </Button>
        <span>External Link URL</span>
        <input
            name = 'extLink'
            value = {link}
            onChange = {(event) => {setLink(event.target.value)}}
            />
        </Stack>
        <Button onClick={handleSourceChange} variant="contained"> Update Link </Button>
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default ImagePanel;