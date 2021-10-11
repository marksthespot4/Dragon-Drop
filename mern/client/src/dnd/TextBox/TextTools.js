import {branch, item, useTools, DnDBuilder} from "build-ui";

const TextTools = () => {
    const tools = useTools();
    const handleDragTool = event => {
        event.stopPropagation();
        const TextProps = {
            Title: "Insert Title",
            mainText: 'Insert body text'
        }
        const text = item({
            type: 'Text',
            props: TextProps
        })
        const data = branch(text);
        tools.triggerDragStart({
            data: data
        });
    }
    return <DnDBuilder
        onDragStart = {handleDragTool}
        onDragEnd = {tools.handleDragEnd}
        draggable = {true}
    >
        Text Box
    </DnDBuilder>
}

export default TextTools;