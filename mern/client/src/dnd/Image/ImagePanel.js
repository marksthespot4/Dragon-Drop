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

    const handleSourceChange = () => {
        console.log(textField)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {imageUrl: textField}
        });
    }

    return <div>
        <TextField
            name = 'imageUrl'
            value = {textField}
            onChange={(event) => {setTextField(event.target.value)}} 
            />
        <Button onClick={handleSourceChange} variant="contained"> Upload new image </Button>

    </div>
}

export default ImagePanel;