import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import {positionStyles, sizingStyles} from "../../../styles/ui";

export const textStyles = ({
    text: props => ({
        color: props.color,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        textAlign: props.textAlign,
        margin: props.margin || 0,
        padding: props.padding || 0,
    }),
})

const useStyle = makeStyles(combineStyles(
    textStyles,
    sizingStyles,
    positionStyles,
));

export default useStyle;