import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { positionStyles, sizingStyles } from "../../../styles/ui";
import { textStyles } from "./Text";

const textInputStyles = ({
    textInput: props => ({
        ...textStyles.text(props),
        resize: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        '&:focus': {
            outline: 'none'
        }
    }),
})

const useStyle = makeStyles(combineStyles(
    textInputStyles,
    positionStyles,
    sizingStyles,
));

export default useStyle;