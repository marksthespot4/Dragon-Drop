import useStyle from './style/Text';
import clsx from 'clsx';
import React from 'react';
import { toast } from 'react-toastify';

const Text = React.forwardRef(({
    children,
    className,
    style,
    text,
    extLink,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classText = clsx(
        classes.text,
        classes.fill,
    );
    const classAll = clsx(
        className,
        classes.ui,
    );
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
    return <div
        className = {classAll}
        onContextMenu={() => openTab()}
    >
        <p 
            ref = {ref}
            className = {classText}
            {...props}
        >
            {text}
        </p>
        {children}
    </div>
});

export default Text;