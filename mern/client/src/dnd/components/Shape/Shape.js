import {useState} from "react"
import { toast } from 'react-toastify';
import clsx from 'clsx';
import useStyle from './style/Shape';
import React from 'react';

window.document.addEventListener('contextmenu', function(event){event.preventDefault();})
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

const Shape = React.forwardRef(({
    shapeType,
    shapeText,
    children,
    className,
    style,
    ...props
    }, ref) => {
        const classes = useStyle(style);
        const classShape = clsx(classes.shape, classes.fill);
        const classAll = clsx(className, classes.ui)
        const update = () => (
            console.log(shapeType)
        )
        const openTab = () =>
        {
            var valid = /^(ftp|http|https):\/\/[^ "]+$/.test(shapeText);
            if (valid)
            {
                window.open(shapeText);
            }
            else
            {
                toast.error("Please enter a valid http url.");
            }
        }
        return <div className = {classAll}>
                <img src={shapeType} onClick={update} onContextMenu={() => openTab()} className={classShape} ref={ref} {...props} alt={"Invalid input"}/>
                {children}
            </div>
});
}
export default Shape;