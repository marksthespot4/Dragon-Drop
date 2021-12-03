import {useState} from "react";
import "./styles/builder.css"
import Sidebar from "./Sidebar/Sidebar"
import {Grid} from "@material-ui/core"
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import CounterView from "./components/Counter/CounterView";
import TextView from "./components/TextBox/TextView";
import ImageView from "./components/Image/ImageView";
import VideoView from "./components/Video/VideoView";
import ButtonView from "./components/Button/ButtonView"
import ShapeView from "./components/Shape/ShapeView"
import SectionView from "./components/Section/SectionView";
import TopBarView from "./TopBar/TopBarView";
import CanvasView from "./components/canvas/CanvasView";
//import TopBar from './TopBar';

import { RiAlignJustify } from "react-icons/ri";
import BuilderSelector from "./hooks/BuilderSelector";

const ViewBuilder = (props) => {


    const view = {
        Text: TextView,
        Image: ImageView,
        Video: VideoView,
        Counter: CounterView,
        Section: SectionView,
        Button: ButtonView,
        Shape: ShapeView,
        Canvas: CanvasView
    };

    const tree = branch(
        item({
            type: 'Canvas',
            props:{
                style:{
                    width: '100%',
                    height: '800px',
                    backgroundColor: 'white'
                }
            }
        })
    );

    return ( 
    <div>
        <Builder initialTree={tree}>

            <Grid 
                container = {true} 
            >
            <Grid 
                container = {true} 
                item = {true} 
            >

                <Grid 
                    item = {true} 
                    xs = {12} 
                    md = {6}
                >
                    <TopBarView id={props.id} style={"position: sticky;"}/>
                </Grid>

            </Grid>
            
            <Grid 
                container = {true} 
                xs = {12}
            >
    
                <Grid
                    item = {true}
                    xs={2}
                >
                    {/* <Sidebar/> */}
                </Grid>
                <Grid 
                    item = {true} 
                    xs={10}
                    >
                    <Workspace view={view}/>
                    <BuilderSelector />
                </Grid>


            </Grid>
            </Grid>
        </Builder>
    </div>
    )
}

export default ViewBuilder;