import { makeStyles } from "@mui/styles";
import combineStyles from '../utils/combine';
import {panelStyles} from '../styles/panels';

const useStyle = makeStyles(combineStyles(
    panelStyles,
));

export default useStyle;