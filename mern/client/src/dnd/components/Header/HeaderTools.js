import {branch, DnDBuilder, item, useActions, useTools} from 'build-ui'
import {Button} from "@material-ui/core";

const HeaderTools = ({
    className,
    ...rest
}) => {
    const tools = useTools();
    const actions = useActions();
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


        const titleStyle = {
            color: '#000000',
            fontSize: '22px',
            fontFamily: 'Arial',
            left: '80px',
            top: '20px',
            width: '500px',
            height: '50px'
        }
        const titleProps = {
            text: 'Insert Website Title  (set coordinates to 0,0)',
            style: titleStyle,
        }
        const title = item({
            type: 'Text',
            props: titleProps
        })
        const titleData = branch(title);

        const buttonStyle ={
            width: '75px',
            height: '50px',
            left: '90%',
            top: '20%',
        }
        const buttonProps = {
            text: 'Header Button!',
            color: 'primary',
            variant: 'outlined',
            style: buttonStyle,
        };
        const button = item({
            type: 'Button',
            props: buttonProps
        })
        const buttonData = branch(button);
        tools.triggerDragStart({
            data: buttonData
        });


        const headerStyle = {
            width: '100%',
            height: '90px',
            left: '0px',
            top: '0px',
            backgroundColor: '#D3D3D3',
        }
        const headerProps = {
            style: headerStyle,
        }

        const header = item({
            type: 'Header',
            props: headerProps,
        })
        const data = branch(header).with_child(titleData).with_child(imageData).with_child(buttonData);
        tools.triggerDragStart({
            data: data
        });
    }
    const handleDrop = () => {
        tools.handleDragEnd();
    }

    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {handleDrop}
        draggable = {true}
        {...rest}
    >
        <Button>Header</Button>
    </DnDBuilder>
}

export default HeaderTools;