import { useState } from "react"
import "../styles/TextStyles.css"
import {Rnd} from "react-rnd"

export const Text = ({titleText = "Insert title", mainText = "Insert text here"}) => {
    const [title, setTitle] = useState(titleText);
    const [body, setText] = useState(mainText);

    return <Rnd default={{
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      }}
    ><div>
        <h2 className="heading"> Hi this is some text </h2>
        <p>
        <span className="ptag"> {mainText} </span>
        </p>
    </div>
    </Rnd>
}
