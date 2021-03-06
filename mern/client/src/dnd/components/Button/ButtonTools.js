import {branch, item, useTools, DnDBuilder} from "build-ui";
import {Button, Tooltip} from "@material-ui/core";

const ButtonTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const buttonStyle ={
            width: '75px',
            height: '50px',
        }
        const buttonProps = {
            text: 'Button',
            color: 'primary',
            variant: 'outlined',
            style: buttonStyle
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
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...rest}
    >
    <Tooltip title="Shortcut: ctrl + b">
        <Button> Button </Button>
    </Tooltip>  
    </DnDBuilder>
}

export default ButtonTools;