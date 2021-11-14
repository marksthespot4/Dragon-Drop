import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";

const canvasStyles = ({
    canvas: props => ({
        width: "97%",
        height: '720px',
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(canvasStyles,));

export default useStyle;