import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";

const canvasStyles = ({
    canvas: props => ({
        width: '1920px',
        height: '1080px',
        position: 'relative',
        backgroundColor: props.backgroundColor,
    }),
})

const useStyle = makeStyles(combineStyles(canvasStyles,));

export default useStyle;