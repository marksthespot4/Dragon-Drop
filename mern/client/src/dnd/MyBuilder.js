import {useState} from "react";
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
import SectionView from "./Section/SectionView";
//import TopBar from './TopBar';

const MyBuilder = () => {
    const view = {
        Text: TextView,
        Image: ImageView,
        Counter: CounterView,
        Section: SectionView,
    };
    const panel = {
        Counter: CounterPanel,
        Image: ImagePanel,
        Text: TextPanel
    };
    const tree = branch(
        item({
            type: 'Section',
        })
    );
    return <Builder initialTree = {tree}>
            <Workspace view = {view}/>
            <Panel view = {panel} />
            <CounterTools />
            <TextTools />
            <ImageTools />
        </Builder>
}

export default MyBuilder;