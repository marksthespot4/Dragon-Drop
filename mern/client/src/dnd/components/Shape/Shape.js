import clsx from 'clsx';
import useStyle from './style/Shape';
import React from 'react';

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
                alert("Please enter a valid http url.");
            }
        }
        return <div className = {classAll}>
                <img src={shapeType} onClick={update} onContextMenu={() => openTab()} className={classShape} ref={ref} {...props} alt={"Invalid input"}/>
                {children}
            </div>
});

export default Shape;