import { useState } from "react"
// import "../styles/TextStyles.css"

export const Text = ({titleText = "Insert title", mainText = "Insert text here"}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);

    return <div>
        <h2 className="heading"> Hi this is some text </h2>
        <p>
        <span className="ptag"> {mainText} </span>
        </p>
    </div>
}
