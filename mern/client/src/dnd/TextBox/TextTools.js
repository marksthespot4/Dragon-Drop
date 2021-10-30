import {branch, item, useTools, DnDBuilder, useDnDHelpers} from "build-ui";
import { Button } from "@material-ui/core"
import RichTextMenu from "./RichTextMenu";
import React from "react";

const TextTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const TextProps = {
            Title: "Insert Title",
            mainText: 'Insert body text',
            textBold: false,
            textItalicize: false,
            textUnderline: false,
            color: "#ffff"
        }

        const text = item({
            type: 'Text',
            props: TextProps
        })
        const data = branch(text);
        console.log(text.props)
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
        <Button>Text </Button>
    </DnDBuilder>
    
}

export default TextTools;