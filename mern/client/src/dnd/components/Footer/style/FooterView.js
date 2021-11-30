import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { viewStyles } from "../../../styles/views";

const footerStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(viewStyles, footerStyles));

export default useStyle;