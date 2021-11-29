import {makeStyles} from '@mui/styles';
import combineStyles from "../../../utils/combine";
import {fillStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const imageStyles = ({
    image: ({})
})

const useStyle = makeStyles(combineStyles(
    imageStyles,
    sizingStyles,
    positionStyles,
    fillStyles
));

export default useStyle;