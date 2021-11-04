import {makeStyles} from '@mui/styles';
import combineStyles from "../../../utils/combine";
import {positionStyles, sizingStyles} from '../../../styles/ui';

const imageStyles = ({
    image: ({})
})

const useStyle = makeStyles(combineStyles(
    imageStyles,
    sizingStyles,
    positionStyles
));

export default useStyle;