import Button from "@mui/material/Button"
import clsx from "clsx";
import React from "react";
import useStyle from './style/Button'

const ButtonMain = React.forwardRef(({
    text,
    style,
    className,
    children,
    ...rest
}, ref) => {
    const classes = useStyle(style);
    const classButton = clsx(
        classes.button,
        classes.fill
    );
    const classAll = clsx(
        className,
        classes.ui
    );
    return <div
        className = {classAll}
    >
        <Button 
            color = {style.backgroundColor}
            ref = {ref}
            className = {classButton}
            {...rest}
        >
            {text}
        </Button>
        {children}
    </div> 
});

export default ButtonMain;