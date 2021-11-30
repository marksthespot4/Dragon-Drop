import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { viewStyles } from "../../../styles/views";

const headerStyles = ({
    view: ({

    })
})

const useStyle = makeStyles(combineStyles(viewStyles, headerStyles));

export default useStyle;