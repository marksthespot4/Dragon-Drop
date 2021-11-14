import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import {fillStyles, positionStyles, sizingStyles} from "../../../styles/ui";

const buttonStyles = ({
    button: props => ({
        color: props.color,
        backgroundColor: props.backgroundColor,
        padding: props.padding,
        margin: props.margin,
    }),
})

const useStyle = makeStyles(combineStyles(
    buttonStyles,
    sizingStyles,
    positionStyles,
    fillStyles,
));

export default useStyle; 