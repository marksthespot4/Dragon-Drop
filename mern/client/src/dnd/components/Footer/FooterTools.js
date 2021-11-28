import {branch, DnDBuilder, item, useTools} from 'build-ui'
import {Button} from "@material-ui/core";

const FooterTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const footerStyle = {
            width: '100%',
            height: '100px',
            x: "0",
            y: "0",
            backgroundColor: '#D3D3D3',
        }
        const footerProps = {
            style: footerStyle,
        }
        const footer = item({
            type: 'Footer',
            props: footerProps
        })
        const data = branch(footer);
        tools.triggerDragStart({
            data: data,
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...rest}
    >
        <Button>Footer</Button>
    </DnDBuilder>
}

export default FooterTools;