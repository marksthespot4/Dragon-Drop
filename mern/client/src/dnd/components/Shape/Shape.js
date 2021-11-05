import {Rectangle, Triangle, Circle} from 'react-shapes';
import {useState} from "react"
import {Button} from "@material-ui/core"
import {Rnd} from 'react-rnd';
import { Redirect } from 'react-router-dom';
document.addEventListener('contextmenu', function(event){event.preventDefault();})
export const Shape = ({
                        shapeType = "Rectangle",
                        shapeText = "http://google.com",
                        starUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png",
                        squareUrl = "https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png",
                        heightProp = 100,
                        widthProp = 200,
                        radius = 50,
                        color
                      }) => {
    const [type, setType] = useState(shapeType);
    const [url, setUrl] = useState(shapeText);

    const openTab = () =>
    {
        var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(shapeText);
        if (valid)
        {
            window.open(shapeText);
        }
        else
        {
            alert("Please enter a valid http url.");
        }
    }
    const returnShape = () => {
        if (shapeType=="Triangle")
        {
            return <Triangle onContextMenu={() => openTab()} width = {widthProp} height={heightProp} fill={{color:color}}>

            </Triangle>

        }
        else if (shapeType=="Circle")
        {
            return <Circle onContextMenu={() => openTab()}  r={radius} fill={{color:color}}>

            </Circle>
        }
        else if (shapeType=="Rectangle")
        {
            return <Rectangle onContextMenu={() => openTab()}  width={widthProp} height={heightProp} fill={{color:color}}>

            </Rectangle>
        }
        else if (shapeType=="Square") {
            return <img onContextMenu={() => openTab()} height={100} width={100} src={"https://static.vecteezy.com/system/resources/previews/001/209/957/non_2x/square-png.png"} ></img>
        }
        else if (shapeType=="Star") {
            return <img onContextMenu={() => openTab()} height={100} width={100} src={"https://upload.wikimedia.org/wikipedia/commons/b/bf/A_Black_Star.png"}/>
        }
    }
    return <div className="shape">
        {returnShape()}
    </div>
}