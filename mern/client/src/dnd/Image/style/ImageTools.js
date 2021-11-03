import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";
import { toolStyles } from "../../styles/tools";

const useStyle = makeStyles(combineStyles(
    toolStyles,
));

export default useStyle;