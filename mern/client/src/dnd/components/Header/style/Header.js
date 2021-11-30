import { makeStyles } from "@mui/styles";
import combineStyles from "../../../utils/combine";
import { positionStyles, sizingStyles } from "../../../styles/ui";

const headerStyles = ({
    header: props => ({
        display: props.display,
        alignItems: props.display === props.alignItems,
        justifyContent: props.display === props.justifyContent,
        backgroundColor: props.backgroundColor,
        backgroundImage: props.backgroundUrl && `url(${props.backgroundUrl})`,
        backgroundPosition: props.backgroundPosition,
        backgroundSize: props.backgroundSize,
        backgroundRepeat: 'no-repeat',
    }),
});

const useStyle = makeStyles(combineStyles(
    headerStyles,
    sizingStyles,
    positionStyles,
));

export default useStyle;