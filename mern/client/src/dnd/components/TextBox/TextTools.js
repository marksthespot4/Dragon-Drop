import {branch, item, useTools, DnDBuilder} from "build-ui";
import useStyle from './style/TextTools'
import clsx from 'clsx';
import {Button} from "@material-ui/core"

const TextTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const textStyle = {
            color: '#000000',
            fontSize: '22px',
            fontFamily: 'Arial',
            width: '200px',
            height: '50px'
        }
        const textProps = {
            text: 'My Text',
            style: textStyle,
        }
        const text = item({
            type: 'Text',
            props: textProps
        });
        const data = branch(text);
        tools.triggerDragStart({
            data: data
        })
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...rest}
    >
        <Button> Text </Button>
    </DnDBuilder>
}

export default TextTools;