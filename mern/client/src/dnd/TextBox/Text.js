import { useState } from "react"

export const Text = ({titleText = "Insert title", mainText = "Insert text here"}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);

    return <div>
        <h1> {titleText} </h1>
        <p>
        <span> {mainText} </span>
        </p>
    </div>
}
