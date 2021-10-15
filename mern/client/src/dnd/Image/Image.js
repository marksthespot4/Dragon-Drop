import DND_logo from "../../images/dragondrop.png"
import "../styles/image.css"
import {Rnd} from "react-rnd"

export const Image = ({}) => {

    return <Rnd default={{
        x: 0,
        y: 0,
        width: 600,
        height: 600,
      }}
    >
        <div>
            <img src={DND_logo} className="image" alt={"DragonDrop Logo"}/>
        </div>
        </Rnd>
}
