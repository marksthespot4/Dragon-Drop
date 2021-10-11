import {useState} from "react";
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
import Counter from "./Counter/Counter";
import CounterPanel from "./Counter/CounterPanel";
import CounterTools from "./Counter/CounterTools";
import CounterView from "./Counter/CounterView"
import TextPanel from "./TextBox/TextPanel";
import TextView from "./TextBox/TextView"
import TextTools from "./TextBox/TextTools";
import SectionView from "./Section/SectionView";
//import TopBar from './TopBar';

const MyBuilder = () => {
    const view = {
        Text: TextView,

        Counter: CounterView,
        Section: SectionView,
        // TextBox: TextView,
    };
    const panel = {
        Counter: CounterPanel,
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
    </Builder>
}

export default MyBuilder;