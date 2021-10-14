import { TextField, Button} from "@material-ui/core";
//import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"

const ShapePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <TextField
            name = 'shapeText'
            value = {editor.props.shapeText}
            onChange = {editor.handleUpdate}
        />
        <span>Height</span>
        <TextField
            name = 'shapeHeight'
            value = {editor.props.heightProp}
            onChange = {editor.handleUpdate}
        />
        <span>Width</span>
        <TextField
            name = 'shapeWidth'
            value = {editor.props.widthProp}
            onChange = {editor.handleUpdate}
        />
        <Button/>
    </div>
}

export default ShapePanel;