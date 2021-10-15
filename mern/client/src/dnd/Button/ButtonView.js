import {DnDBuilder, useEditor} from "build-ui";
import { ButtonComp } from "./ButtonComp";

const ButtonView = ({
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
        <ButtonComp
            {...props}
        />
    </DnDBuilder>
}

export default ButtonView;