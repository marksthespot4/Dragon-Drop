import {useState} from "react";
import "./styles/builder.css"
import Sidebar from "./Sidebar/Sidebar"
import {Grid} from "@material-ui/core"
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import CounterView from "./components/Counter/CounterView"
import TextView from "./components/TextBox/TextView"
import ImageView from "./components/Image/ImageView";
import ButtonView from "./components/Button/ButtonView"
import ShapeView from "./components/Shape/ShapeView"
import SectionView from "./components/Section/SectionView";
import TopBar from "./TopBar/TopBar";
import CanvasView from "./components/canvas/CanvasView";
//import TopBar from './TopBar';


const MyBuilder = (props) => {


    const view = {
        Text: TextView,
        Image: ImageView,
        Counter: CounterView,
        Section: SectionView,
        ButtonComp: ButtonView,
        Shape: ShapeView,
        Canvas: CanvasView
        // TextBox: TextView,
    };

    const tree = branch(
        item({
            type: 'Canvas',
        })
    );
    return ( <div>
        <Builder initialTree={tree}>

            <Grid 
                container = {true} 
            >
                <Grid 
                    item = {true} 
                    xs = {12} 
                    md = {12}
                >
                    <TopBar save={props.save} id={props.id}/>
                </Grid>   
            <Grid 
                item = {true} 
                container = {true} 
                xs = {12} 
                // justify="center"
            >
                
                <Grid 
                    item = {true} 
                    xs = {12} 
                    md = {3} 
                    >
                </Grid>
                <Grid 
                    item = {true} 
                    xs = {12} 
                    md = {6} 
                    >
                    <div style={{overflow:"scroll"}}>
                        <Workspace class="view-window" view={view}/>
                    </div>
                </Grid>

                <Grid
                    item = {true} 
                    xs = {12}
                    md = {3}
                    justify="flex-end"
                >
                    <Grid item>
                        <Sidebar/>
                    </Grid>
                   
                </Grid>

            </Grid>
            
            </Grid>
        </Builder>
    </div>
    )
}

export default MyBuilder;