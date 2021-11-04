import { TextField, Button} from "@material-ui/core";
//import { DeleteIcon } from "@material-ui/icons/Delete"
import Color from "../../color";
import { useState, useEffect } from "react";
import { useEditor, useActions } from "build-ui"

const ButtonPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })

    const actions = useActions()

    const [backColor, setBackColor] = useState(editor.props.backColor);
    const [textColor, setTextColor] = useState(editor.props.textColor);

    const handleBackColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {backColor: backColor}
        });
    }

    useEffect(() => { 
        handleBackColorChange();
    }, [backColor])

    const handleTextColorChange = () => {     
        // setColor(e.target.value);
        actions.timeBatched.triggerUpdate({
            id: id,
            props: {textColor: textColor}
        });
    }

    useEffect(() => { 
        handleTextColorChange();
    }, [textColor])

    return <div>
        <input
            name = 'buttonText'
            value = {editor.props.buttonText}
            onChange = {editor.handleUpdate}
        />
        <div>
            Background Color
            <Color setColor={setBackColor}/> 
            Text Color
            <Color setColor={setTextColor}/>
        </div>
        {/* <Button/> */}
    </div>
}

export default ButtonPanel;