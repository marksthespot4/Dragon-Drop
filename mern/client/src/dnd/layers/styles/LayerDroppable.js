import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";

const droppableStyles = ({
    droppable: props => ({
        border: props.border && '3px solid #72adcc',
        touchAction: 'none'
    }),
    child: props => ({
        display: !props.expanded && 'none'
    }),
    dropdownIcon: ({
        verticalAlign: 'middle',
        height: '0.9em',
        '&:hover': {
            cursor: 'pointer',
        }
    }),
});

const useStyle = makeStyles(combineStyles(droppableStyles,));

export default useStyle;