import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import { useState } from "react"

export const Image = ({imageUrl, extLink}) => {
    const update = () => (
        console.log(imageUrl)
    )
    const openTab = () =>
    {
        var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(extLink);
        if (valid)
        {
            window.open(extLink);
        }
        else
        {
            alert("Please enter a valid http url.");
        }
    }

    return <div>
            <img src={imageUrl} onClick={update} onContextMenu={() => openTab()} className="image" alt={"Invalid input"}/>
        </div>
}
