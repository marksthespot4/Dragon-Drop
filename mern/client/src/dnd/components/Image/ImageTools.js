import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";
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
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        //className = {classAll}
        {...rest}
    >
        <Button> Image </Button>
    </DnDBuilder>
}

export default ImageTools;