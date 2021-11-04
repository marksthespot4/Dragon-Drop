import { TextField, Button} from "@material-ui/core";
//import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"
import Color from "../../color";

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
        <Color/>
        <Button/>
    </div>
}

export default ButtonPanel;