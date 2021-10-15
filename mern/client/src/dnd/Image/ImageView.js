import {DnDBuilder, useEditor} from "build-ui";
import { Image } from "./Image";

const ImageView = ({
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
        <Image {...props} />
    </DnDBuilder>
}

export default ImageView;