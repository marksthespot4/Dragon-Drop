import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { viewStyles } from "../../../styles/views";

const buttonStyles = ({
    view: ({
        
    })
})

const useStyle = makeStyles(combineStyles(
    buttonStyles,
    viewStyles,
));

export default useStyle;