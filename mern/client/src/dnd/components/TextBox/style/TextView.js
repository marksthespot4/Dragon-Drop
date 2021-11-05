import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { viewStyles } from "../../../styles/views";

const textStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(
    viewStyles,
    textStyles,
));

export default useStyle;