import {branch, item, useTools, DnDBuilder} from "build-ui";
import {useEffect} from 'react';
import {Button, Tooltip} from "@material-ui/core";
import { toast } from 'react-toastify';
import mario from "../../../imgs/new_mario.png"
// import useStyle from "./style/ImageTools";
// import clsx from 'clsx';

const ImageTools = ({
    className,
    ...rest
}) => {
    //const classes = useStyle();
    //const classAll = clsx(classes.tool, className);
    const tools = useTools();
    const handleDragTool = () => {

        const imageStyle = {
            width: '200px',
            height: '200px'
        }
        
        const imageProps = {
            imageUrl: mario,
            extLink: "https://youtube.com",
            style: imageStyle
        }
        const image = item({
            type: 'Image',
            props: imageProps
        });
        const data = branch(image);
        tools.triggerDragStart({
            data: data
        });
    }
    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);
      }, []); 

    const handleShortcut = () => {
        toast.info("Image selected");
    }   
    
    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode == 73) handleShortcut()
    }

    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        //className = {classAll}
        {...rest}
    >
    <Tooltip title="Shortcut: ctrl + i">
        <Button> Image </Button>
    </Tooltip>  
    </DnDBuilder>
}

export default ImageTools;