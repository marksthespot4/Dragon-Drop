import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core"

const ButtonTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragStart = () => {
        const buttonProps = {
            text: 'Button',
            color: 'primary',
            variant: 'contained',
            style: {}
        };
        const button = item({
            type: 'Button',
            props: buttonProps
        })
        const data = branch(button);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragStart}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...rest}
    >
        <Button>Button</Button>
    </DnDBuilder>
}

export default ButtonTools;