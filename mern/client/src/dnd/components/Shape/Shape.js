import clsx from 'clsx';
import useStyle from './style/Shape';
import React from 'react';
import { toast } from 'react-toastify';

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
        return <div className = {classAll}>
                <a href={shapeText} target="_blank">
                <img src={shapeType} className={classShape} ref={ref} {...props} alt={"Invalid input"}/>
                </a>
                {children}
            </div>
});

export default Shape;