import { TextField} from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"
import Color from "../color";
import Button from 'react-bootstrap/Button';


const CounterPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })

    return <div>
        <input
            name = 'counterText'
            value = {editor.props.counterText}
            onChange = {editor.handleUpdate}
        />
        <Button> Delete </Button>

    </div>
}

export default CounterPanel;