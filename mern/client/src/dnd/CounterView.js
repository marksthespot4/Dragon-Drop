import { DnDBuilder, useEditor } from "build-ui";
import {Counter} from "./Counter";

const CounterView = ({id, ...props}) => {
    const editor = useEditor({
        id: id
    });
    return <DnDBuilder 
        onClick = {editor.handlePanel}
        onDragStart = {editor.handleDragStart}
        onDragEnd = {editor.handleDragEnd}
        draggable = {true}

    >
        <Counter {...props} />
    </DnDBuilder>
}

export default CounterView;