import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";

const canvasStyles = ({
    canvas: props => ({
        width: '800',
        height: '800',
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(canvasStyles,));

export default useStyle;