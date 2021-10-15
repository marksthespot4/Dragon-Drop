import { TextField, Button } from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"
import Color from "../color";

const CounterPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <TextField
            name = 'counterText'
            value = {editor.props.counterText}
            onChange = {editor.handleUpdate}
        />
        <Color/>
        <Button variant="contained"> Delete </Button>

    </div>
}

export default CounterPanel;