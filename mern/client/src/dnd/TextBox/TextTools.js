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
            linkText: "http://google.com",
            textBold: false,
            textItalicize: false,
            textUnderline: false,
            textSize: 20,
            textFont: 'Arial',
            color: "#000000"
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
        <Button>Text</Button>
    </DnDBuilder>
    
}

export default TextTools;