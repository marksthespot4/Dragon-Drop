import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"
import {Rnd} from "react-rnd"

export const Image = ({imageUrl = "https://e7.pngegg.com/pngimages/660/375/png-clipart-mario-mario.png"}) => {
    const update = () => (
        console.log(imageUrl)
    )

    return <Rnd default={{
        x: 0,
        y: 0,
        width: 600,
        height: 600,
      }}
    >
        <div>
            <img src={imageUrl} onClick={update} className="image" alt={"Enter valid url idiot"}/>
        </div>
        </Rnd>
}
