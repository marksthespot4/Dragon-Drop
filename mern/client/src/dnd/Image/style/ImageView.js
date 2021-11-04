import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";
import { viewStyles } from "../../styles/views";

const useStyle = makeStyles(combineStyles(
    viewStyles,
));

export default useStyle;