import {branch, DnDBuilder, item, useTools} from 'build-ui'
import {Button} from "@material-ui/core";

const HeaderTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const headerStyle = {
            width: '100%',
            height: '100px',
            x: "0",
            y: "0",
            backgroundColor: '#D3D3D3',
        }
        const headerProps = {
            style: headerStyle,
        }
        const header = item({
            type: 'Header',
            props: headerProps
        })
        const data = branch(header);
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
        <Button>Header</Button>
    </DnDBuilder>
}

export default HeaderTools;