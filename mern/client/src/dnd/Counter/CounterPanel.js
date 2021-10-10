import {useEditor} from "build-ui"

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
    </div>
}

export default CounterPanel;