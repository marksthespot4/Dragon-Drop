import {useEditor} from "build-ui"

const TextPanel = ({id}) => {
    const editor = useEditor({
        id: id
    })
    return <div>
        <input
            name = 'mainText'
            value = {editor.props.mainText}
            onChange = {editor.handleUpdate}
        />
    </div>
}

export default TextPanel;