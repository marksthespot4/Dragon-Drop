import {branch, DnDBuilder, item, useTools} from 'build-ui'
import {Button} from "@material-ui/core";

const HeaderTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const titleStyle = {
            color: '#000000',
            fontSize: '22px',
            fontFamily: 'Arial',
            width: '200px',
            height: '50px'
        }
        const titleProps = {
            text: 'My Text',
            extLink: 'https://google.com',
            style: titleStyle,
        }
        const title = item({
            type: 'Text',
            props: titleProps
        })

        const headerStyle = {
            width: '100%',
            height: '100px',
            backgroundColor: '#D3D3D3',
        }
        const headerProps = {
            style: headerStyle,
        }

        const header = item({
            type: 'Header',
            props: headerProps
        })
        const data = branch(header, title);
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