import {useState} from "react";
import "./styles/builder.css"
import Sidebar from "./Sidebar/Sidebar"
import {Grid} from "@material-ui/core"
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import CounterPanel from "./Counter/CounterPanel";
import CounterTools from "./Counter/CounterTools";
import CounterView from "./Counter/CounterView"
import TextPanel from "./TextBox/TextPanel";
import TextView from "./TextBox/TextView"
import TextTools from "./TextBox/TextTools";
import ImageTools from "./Image/ImageTools";
import ImageView from "./Image/ImageView";
import ButtonComp from "./Button/ButtonComp";
import ButtonPanel from "./Button/ButtonPanel";
import ButtonView from "./Button/ButtonView"
import ButtonTools from "./Button/ButtonTools";
import ShapePanel from "./Shape/ShapePanel";
import ShapeView from "./Shape/ShapeView"
import ShapeTools from "./Shape/ShapeTools";
import SectionView from "./Section/SectionView";
import TopBar from "./TopBar/TopBar";
import { RiAlignJustify } from "react-icons/ri";

const MyBuilder = (props) => {


    const view = {
        Text: TextView,
        Image: ImageView,
        Counter: CounterView,
        Section: SectionView,
        ButtonComp: ButtonView,
        Shape: ShapeView
        // TextBox: TextView,
    };

    const tree = branch(
        item({
            type: 'Section',
        })
    );
    return ( <div>
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
                    <TopBar save={props.save} prevSave={props.prevSave}/>
                </Grid>

            </Grid>
            
            <Grid 
                item = {true} 
                container = {true} 
                xs = {12} 
            >

                <Grid 
                    item = {true} 
                    xs = {12} 
                    md = {9} 
                    >
                    <div className="box">
                        <Workspace class="view-window" view={view} style={{overflow:"scroll"}}/>
                    </div>
                </Grid>

                <Grid 
                    item = {true} 
                    xs = {12}
                    md = {3}
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