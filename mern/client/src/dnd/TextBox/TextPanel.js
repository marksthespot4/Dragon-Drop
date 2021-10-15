import {useEditor} from "build-ui"
import Color from "../color";

const TextPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <input
            type="text"
            class="textbox"
            name = 'mainText'
            value = {editor.props.mainText}
            onChange = {editor.handleUpdate}
        />
        <Color/>
    </div>
}

export default TextPanel;