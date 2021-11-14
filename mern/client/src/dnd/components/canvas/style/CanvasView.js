import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import {viewStyles} from '../../../styles/views'

const canvasStyles = ({
    view: ({
        overflow: 'auto',
    }),
});

const useStyle = makeStyles(combineStyles(
    viewStyles,
    canvasStyles,
));

export default useStyle;