import clsx from 'clsx';
import useStyle from './style/Video'
import React from 'react';

const Video = React.forwardRef(({
    videoUrl, 
    extLink,
    children,
    className,
    style,
    ...props
}, ref) => {
    const classes = useStyle(style);
    const classVideo = clsx(classes.video, classes.fill);
    const classAll = clsx(className, classes.ui)
    const update = () => (
        console.log(videoUrl)
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

    const convertToEmbed = () =>
    {
        
    }
    return <div className = {classAll}>
            <iframe height="100%" width="100%" src={videoUrl.replace("watch?v=", "embed/")}> </iframe>
            <button onClick={update} />
            {children}
        </div>
});

export default Video;
