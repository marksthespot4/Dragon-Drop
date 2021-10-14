import { TextField, Button } from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"

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
        <Button variant="contained"> Delete </Button>

    </div>
}

export default CounterPanel;