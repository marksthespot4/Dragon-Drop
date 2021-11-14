import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { viewStyles } from "../../../styles/views";

const sectionStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(viewStyles, sectionStyles));

export default useStyle;