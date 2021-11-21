import {makeStyles, propsToClassKey} from '@mui/styles';
import combineStyles from "../../../utils/combine";
import {fillStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const shapeStyles = ({
    shape: props=>({
        background: props.backgroundColor,
    })
})

const useStyle = makeStyles(combineStyles(
    shapeStyles,
    sizingStyles,
    positionStyles,
    fillStyles
));

export default useStyle;