import {Stack} from "@mui/material"
import useDragonEditor from "../../hooks/useDragonEditor"
import {useActions} from "build-ui"
import { useState , useEffect} from "react";
import Button from 'react-bootstrap/Button';
import SizingPanel from "../../panels/SizingPanel";
import PositionPanel from "../../panels/PositionPanel";

const VideoPanel = ({id}) => {
    const actions = useActions();
    const editor = useDragonEditor({
        id: id
    })

    const [textField, setTextField] = useState(editor.props.videoUrl)
    const [link, setLink] = useState(editor.props.extLink)
    const [fileUrl, setFileUrl] = useState(null)

    const handleSourceChange = () => {

        actions.timeBatched.triggerUpdate({
            id: id,
            props: {videoUrl: textField, extLink:link}
        });
    }

    const videoFileUpload = event => {
        const url = URL.createObjectURL(event.target.files[0])
        // console.log(url)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {videoUrl: url, extLink:link}
        });
    }

    return <div>
        <Stack>
            <span>Video Url</span>
        <input
            name = 'videoUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}}
            />
        <Button onClick={handleSourceChange}> Update Video Link </Button>
        </Stack>
        <SizingPanel id = {id} />
        <PositionPanel id = {id} />

    </div>
}

export default VideoPanel;