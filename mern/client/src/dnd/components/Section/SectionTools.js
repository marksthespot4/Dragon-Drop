import { branch, DnDBuilder, item, useTools } from 'build-ui'
import {Button, Tooltip} from "@material-ui/core";

const SectionTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const sectionStyle = {
            width: '400px',
            height: '200px',
            backgroundColor: '#3e4aab',
        }
        const sectionProps = {
            style: sectionStyle,
        }
        const section = item({
            type: 'Section',
            props: sectionProps
        })
        const data = branch(section);
        tools.triggerDragStart({
            data: data,
        });
    }
    
    return <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
        {...rest}
    >
      <Tooltip title="Shortcut: ctrl + e">
        <Button> Section </Button>
    </Tooltip>  
    </DnDBuilder>
}

export default SectionTools;