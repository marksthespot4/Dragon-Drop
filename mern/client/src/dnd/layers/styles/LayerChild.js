import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";

const childStyles = ({
    child: props => ({
        borderTop: props.borderTop && '3px solid #72adcc',
        borderBottom: props.borderBottom && '3px solid #72adcc'
    })
});

const useStyle = makeStyles(combineStyles(childStyles,));

export default useStyle;