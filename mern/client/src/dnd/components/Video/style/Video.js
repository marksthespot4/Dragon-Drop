import {makeStyles} from '@mui/styles';
import combineStyles from "../../../utils/combine";
import {fillStyles, positionStyles, sizingStyles} from '../../../styles/ui';

const videoStyles = ({
    video: ({})
})

const useStyle = makeStyles(combineStyles(
    videoStyles,
    sizingStyles,
    positionStyles,
    fillStyles
));

export default useStyle;