import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";

const draggableStyles = ({
    draggable: ({
        touchAction: 'none'
    })
});

const useStyle = makeStyles(combineStyles(draggableStyles));

export default useStyle;