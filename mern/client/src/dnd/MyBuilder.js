import {useState} from "react";
import "./styles/builder.css"
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import Counter from "./Counter/Counter";
import CounterPanel from "./Counter/CounterPanel";
import CounterTools from "./Counter/CounterTools";
import CounterView from "./Counter/CounterView"
import TextPanel from "./TextBox/TextPanel";
import TextView from "./TextBox/TextView"
import TextTools from "./TextBox/TextTools";
import ImagePanel from "./Image/ImagePanel";
import ImageTools from "./Image/ImageTools";
import ImageView from "./Image/ImageView";
import ButtonComp from "./Button/ButtonComp";
import ButtonPanel from "./Button/ButtonPanel";
import ButtonView from "./Button/ButtonView"
import ButtonTools from "./Button/ButtonTools";
import Shape from "./Shape/Shape";
import ShapePanel from "./Shape/ShapePanel";
import ShapeView from "./Shape/ShapeView"
import ShapeTools from "./Shape/ShapeTools";
import SectionView from "./Section/SectionView";
import TopBar from "./TopBar/TopBar";
//import TopBar from './TopBar';


const MyBuilder = () => {

    // const [tree, setTree] = useState(0);

    const view = {
        Text: TextView,
        Image: ImageView,
        Counter: CounterView,
        Section: SectionView,
        ButtonComp: ButtonView,
        Shape: ShapeView
        // TextBox: TextView,
    };
    const panel = {
        Counter: CounterPanel,
        Image: ImagePanel,
        Text: TextPanel,
        ButtonComp: ButtonPanel,
        Shape: ShapePanel
    };
    const tree = branch(
        item({
            type: 'Section',
        })
    );
    return (
        <Builder initialTree = {tree}>
            <TopBar />
            <Workspace view = {view}/>
            <Panel view = {panel} />
            <div className="container-row">
            <CounterTools />
            <TextTools />
            <ImageTools />
            <ButtonTools />
            <ShapeTools />
            </div>
        </Builder>
    )
}

export default MyBuilder;