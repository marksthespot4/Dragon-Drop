import {branch, item, useTools, DnDBuilder} from "build-ui";
import useStyle from './style/TextTools'
import clsx from 'clsx';
import {useEffect} from 'react';
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
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecorationLine: 'none',
            width: '200px',
            height: '50px'
        }
        const textProps = {
            text: 'My Text',
            extLink: 'https://google.com',
            style: textStyle,
            textBold: true,
            textItalicize: true,
            textUnderline: true
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
    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);
      }, []);  
    
    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode == 88) handleDragTool()
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