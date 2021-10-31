import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"

export const Image = ({imageUrl}) => {
    const update = () => (
        console.log(imageUrl)
    )

    return <div>
            <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
        </div>
}
