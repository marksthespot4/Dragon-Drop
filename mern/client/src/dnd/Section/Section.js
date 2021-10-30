import {makeStyles} from '@mui/styles'

const useStyle = makeStyles({
    section: ({
        width: 600,
        height: 400
    }),
})

const Section = ({
    className,
    ...props
}) => {
    const classes = useStyle();
    const classAll = `
        ${className || ''} 
        ${classes.section}
    `;
    return <div {...props} className = {classAll} />
}

export default Section;