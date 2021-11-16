import clsx from 'clsx';
import useStyle from './style/Image'
import React from 'react';
import { toast } from 'react-toastify';

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
            toast.error("Please enter a valid http url.");
        }
    }
    return <div className = {classAll}>
            <img src={imageUrl} onClick={update} onContextMenu={() => openTab()} className={classImage} ref={ref} {...props} alt={"Invalid input"}/>
            {children}
        </div>
});

export default Image;
