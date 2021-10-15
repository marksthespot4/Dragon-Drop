import { TextField, Button} from "@material-ui/core";
//import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"

const ButtonPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <TextField
            name = 'buttonText'
            value = {editor.props.buttonText}
            onChange = {editor.handleUpdate}
        />
        <Button/>
    </div>
}

export default ButtonPanel;