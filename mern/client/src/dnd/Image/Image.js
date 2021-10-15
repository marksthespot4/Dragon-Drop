import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"
import {Rnd} from "react-rnd"

export const Image = ({imageUrl}) => {
    const update = () => (
        console.log(imageUrl)
    )

    return <Rnd 
    default={{
        x: 0,
        y: 0,
        width: 200,
        height: 200,
      }}
    >
        <div>
            <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
        </div>
        </Rnd>
}
