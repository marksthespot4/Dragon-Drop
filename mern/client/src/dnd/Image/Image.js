import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"

export const Image = ({imageUrl = "https://e7.pngegg.com/pngimages/660/375/png-clipart-mario-mario.png"}) => {
    const update = () => (
        console.log(imageUrl)
    )

    return <div>
        <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
    </div>
}
