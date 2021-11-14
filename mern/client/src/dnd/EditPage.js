// import Grid from "@material-ui/core/Grid";
// import useStyle from "./styles/EditPage";
// import SideBar, {SidebarLayers, SidebarPanel} from "./layout/SideBar";
// import {TopBar} from "./TopBar/TopBar";
// import Workspace from "./Workspace";

// const BuilderGrid = () => {
//     const classes = useStyle();
//     return <Grid 
//         container = {true} 
//         className = {classes.grid}
//     >
//         {/* TOP GRID */}
//         <Grid 
//             container = {true} 
//             item = {true} 
//             className = {classes.topGrid}
//         >
//             {/* TOPBAR GRID */}
//             <Grid 
//                 item = {true} 
//                 xs = {12}
//                 md = {6}
//             >
//                 <TopBar className = {classes.menu} />
//             </Grid>

//         </Grid>
        
//         {/* CONTENT GRID */}
//         <Grid 
//             item = {true} 
//             container = {true} 
//             xs = {12} 
//             className = {classes.workAndSideGrid}
//         >

//             {/* WORKSPACE GRID */}
//             <Grid 
//                 item = {true} 
//                 xs = {12} 
//                 md = {9} 
//                 className = {classes.workGrid}>
//                 <Workspace className = {classes.workspace} />
//             </Grid>

//             {/* SIDEBAR GRID */}
//             <Grid 
//                 item = {true} 
//                 xs = {12}
//                 md = {3}
//                 className = {classes.sideGrid}
//             >
//                 <SideBar className = {classes.sidebar}>
//                     <SidebarPanel className = {classes.panel} />
//                     <SidebarLayers className = {classes.layers} />
//                 </SideBar>
//             </Grid>

//             {/* LEFTBAR GRID */}
//             <Grid  
//                 item = {true}
//                 xs = {12}
//                 md = {3}
//                 className = {classes.leftGrid}
//             >
//                 <LeftBar classname = {classes.LeftBar} />
//             </Grid>

//         </Grid>
        
//     </Grid>
// }

// export default BuilderGrid;