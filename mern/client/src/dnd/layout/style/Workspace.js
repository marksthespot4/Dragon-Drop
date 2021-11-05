import { makeStyles } from "@mui/styles";
import combineStyles from "../../utils/combine";

export const workspaceStyles = theme => ({
    workspace: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%',
            width: '100%',
        }),
        [theme.breakpoints.down('md')]: ({
            height: 600,
            width: '100%',
        }),
    })
})

const useStyle = makeStyles(combineStyles(
    workspaceStyles,
));

export default useStyle;