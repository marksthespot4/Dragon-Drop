import {branch, DnDBuilder, item, useTools} from 'build-ui'
import {Button} from "@material-ui/core";

const FooterTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const handleDragTool = () => {
        const imageStyle = {
            width: '70px',
            height: '70px'
        }
        
        const imageProps = {
            imageUrl: "https://pngimg.com/uploads/mario/mario_PNG55.png",
            style: imageStyle
        }
        const image = item({
            type: 'Image',
            props: imageProps
        });
        const imageData = branch(image);


        const textStyle = {
            color: '#000000',
            fontSize: '12px',
            fontFamily: 'Arial',
            left: '80px',
            top: '20px',
            width: '500px',
            height: '50px'
        }
        const textProps = {
            text: 'Insert some footer text here!',
            style: textStyle,
        }
        const text = item({
            type: 'Text',
            props: textProps
        })
        const textData = branch(text);


        const footerStyle = {
            width: '100%',
            height: '150px',
            backgroundColor: '#D3D3D3',
        }
        const footerProps = {
            style: footerStyle,
        }

        const footer = item({
            type: 'Footer',
            props: footerProps,
        })
        const data = branch(footer).with_child(textData).with_child(imageData);
        console.log(data);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
        {...rest}
    >
        <Button>Footer</Button>
    </DnDBuilder>
}

export default FooterTools;