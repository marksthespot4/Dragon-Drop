import clsx from 'clsx';
import useStyle from './style/Image'
import React from 'react';

const Image = React.forwardRef(({
    imageUrl, 
    extLink,
    children,
    className,
    ...props
}, ref) => {
    const classes = useStyle();
    const classImage = clsx(classes.image);
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
            alert("Please enter a valid http url.");
        }
    }
    return <div className = {classAll}>
            <img src={imageUrl} onClick={update} onContextMenu={() => openTab()} className={classImage} ref={ref} {...props} alt={"Invalid input"}/>
            {children}
        </div>
});

export default Image;
