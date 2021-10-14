import { useState } from "react"
// import "../styles/TextStyles.css"
import RichTextMenu from "./RichTextMenu";

export const Text = ({titleText = "Insert title", mainText = "Insert text here"}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);
    //alert(JSON.stringify(mainText));

    return <div>
        <h2 className="heading"> Hi this is some text </h2>
        <p>
        <span className="ptag"> {mainText} </span>
        </p>
        <RichTextMenu input = {JSON.stringify(mainText)}>
        </RichTextMenu>
    </div>
}
