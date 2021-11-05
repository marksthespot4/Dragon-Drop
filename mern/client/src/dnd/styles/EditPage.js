import {makeStyles} from '@material-ui/core/styles'
import combineStyles from "../utils/combine";
import {topbarStyles} from './TopBar';
import {sidebarStyles} from '../layout/style/SideBar';
import {workspaceStyles} from '../layout/style/Workspace';

export const gridStyles = theme => ({
    grid: ({

    }),
    topGrid: ({
        // position: 'sticky',
        // top: '0px'
    }),
    workAndSideGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: 600
        }),
    }),
    workGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%'
        }),
    }),
    sideGrid: ({
        [theme.breakpoints.up('md')]: ({
            height: '100%'
        }),
    })
})

const useStyle = makeStyles(combineStyles(
    gridStyles,
    workspaceStyles,
    sidebarStyles
));

export default useStyle;