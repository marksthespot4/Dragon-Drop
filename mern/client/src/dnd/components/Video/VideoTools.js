import {branch, item, useTools, DnDBuilder} from "build-ui";
import { Button } from "@material-ui/core";
import useStyle from "./style/VideoTools";
import clsx from 'clsx';

const VideoTools = ({
    className,
    ...rest
}) => {
    //const classes = useStyle();
    //const classAll = clsx(classes.tool, className);
    const tools = useTools();
    const handleDragTool = () => {

        const videoStyle = {
            width: '300px',
            height: '200px'
        }
        
        const videoProps = {
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            style: videoStyle
        }
        const video = item({
            type: 'Video',
            props: videoProps
        });
        const data = branch(video);
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
        <Button> Video </Button>
    </DnDBuilder>
}

export default VideoTools;