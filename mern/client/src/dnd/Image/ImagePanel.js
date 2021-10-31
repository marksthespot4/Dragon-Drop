import { TextField, Button } from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useActions} from "build-ui"
import useDragonEditor from "../hooks/useDragonEditor"
import { useState } from "react";

const ImagePanel = ({id}) => {
    const actions = useActions();
    const editor = useDragonEditor({
        id: id
    })
    
    const [source, setSource] = useState(editor.props.src);
    const handleSourceChange = () => {
        console.log(textField)
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {src: source}
        });
    }

    const handleChange = event => {
        setSource(event.target.value);
    }

    return <div>
        <TextField
            name = 'imageUrl'
            value = {source}
            onChange={handleChange}
            />
        <Button onClick={handleSourceChange} variant="contained"> Upload new image </Button>

    </div>
}

export default ImagePanel;