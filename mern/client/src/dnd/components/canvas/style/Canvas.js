import { makeStyles } from "@mui/styles";
import { sizingStyles } from "../../../styles/ui";
import combineStyles from "../../../utils/combine";

const canvasStyles = ({
    canvas: props => ({
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(canvasStyles, sizingStyles));

export default useStyle;