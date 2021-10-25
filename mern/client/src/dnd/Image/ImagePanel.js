import { TextField, Button } from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor, useActions} from "build-ui"
import { useState } from "react";

const ImagePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    const actions = useActions()
    const [textField, setTextField] = useState(editor.props.imageUrl)
    const [imageHeight, setImageHeight] = useState(editor.props.imageHeight)
    const [imageWidth, setImageWidth] = useState(editor.props.imageWidth)

    const handleSourceChange = () => {
        console.log(textField)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {imageUrl: textField, imageHeight: imageHeight, imageWidth: imageWidth}
        });
    }

    const handleWidthChange = (event) => {
        var x = event.target.value
        var y = editor.props.style.height

        editor.props.style.transform = 'translate(' + x + 'px,' + y + 'px)'
        setImageWidth(x)
    }

    const handleHeightChange = (event) => {
        var x = editor.props.style.height
        var y = event.target.value

        editor.props.style.transform =  'translate(' + x + 'px,' + y + 'px)'
        setImageHeight(y)
    }

    return <div>
        <TextField
            name = 'imageUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}} 
            />
        <TextField
            name = 'imageWidth'
            value = {imageWidth}
            onChange={(event) => {handleWidthChange(event)}}
            />
        <TextField
            name = 'imageHeight'
            value = {imageHeight}
            onChange={(event) => {handleHeightChange(event)}}
            />
        <Button onClick={handleSourceChange} variant="contained"> Upload new image </Button>

    </div>
}

export default ImagePanel;