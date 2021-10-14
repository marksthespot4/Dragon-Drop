import {DnDBuilder, useEditor} from "build-ui";
import { Text } from "./Text";

const TextView = ({
    id,
    ...props
}) => {
    const handleButton = event => {
        event.stopPropagation();
    }
    const editor = useEditor({
        id: id
    });
    const {
        handlePanel,
        handleDragStart,
        handleDragEnd,
    } = editor;
    return <DnDBuilder
        onClick = {handlePanel}
        onDragStart = {handleDragStart}
        onDragEnd = {handleDragEnd}
        draggable = {true}
    >
        <Text
            {...props}
        />
    </DnDBuilder>
}

export default TextView;