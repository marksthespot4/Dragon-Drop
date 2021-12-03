import clsx from 'clsx';
import useStyle from './style/Image'
import React from 'react';

const Image = React.forwardRef(({
    imageUrl, 
    extLink,
    children,
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classImage = clsx(classes.image, classes.fill);
    const classAll = clsx(className, classes.ui)
    
    return <div className = {classAll}>
            <a href={extLink}>
            <img src={imageUrl} className={classImage} ref={ref} {...props} alt={"Invalid input"}/>
            </a>

            {children}
        </div>
});

export default Image;
