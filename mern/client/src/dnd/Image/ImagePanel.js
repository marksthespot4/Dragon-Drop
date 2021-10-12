import { TextField, Button } from "@material-ui/core";
import { DeleteIcon } from "@material-ui/icons/Delete"
import {useEditor} from "build-ui"

const ImagePanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>

        <Button variant="contained"> Delete </Button>

    </div>
}

export default ImagePanel;