import {branch, item, useTools, DnDBuilder, useDnDHelpers} from "build-ui";
import { Button } from "@material-ui/core"
import RichTextMenu from "./RichTextMenu";

const TextTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const TextProps = {
            Title: "Insert Title",
            mainText: 'Insert body text',
        }
        const text = item({
            type: 'Text',
            props: TextProps,
        })
        const data = branch(text);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        //onDragOver = {handleDragOver}
        draggable = {true}
        
    >
    <Button> Text Box </Button>
   
    </DnDBuilder>
    
}

export default TextTools;