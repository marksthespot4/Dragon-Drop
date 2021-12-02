import clsx from 'clsx';
import React from 'react';
import useStyle from './style/Header'

const Header = React.forwardRef(({
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classAll = clsx(
        className,
        classes.header,
        classes.ui,
        classes.position
    );
    return <div
        className = {classAll}
        ref = {ref}
        {...props}
    />
});

export default Header;