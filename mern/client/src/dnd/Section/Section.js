import './section.css'

const Section = ({
    className,
    ...props
}) => {
    return <div {...props} className ="section" />
}

export default Section;