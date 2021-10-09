import {useState} from "react";
import {Builder, Workspace, Panel, branch, item} from 'build-ui';
//import {CounterView, CounterPanel, CounterTools} from "./dnd";
import Counter from "./dnd/Counter";
import CounterPanel from "./dnd/CounterPanel";
import CounterTools from "./dnd/CounterTools";
import CounterView from "./dnd/CounterView";
import SectionView from "./dnd/Section";
//import TopBar from './TopBar';

export const MyBuilder = () => {
    const view = {
        Counter: CounterView,
        Section: SectionView
    };
    const panel = {
        Counter: CounterPanel,
    };
    const section = item({
        type: 'Section',
    })
    const tree = branch(section);
    return <Builder initialTree = {tree}>
        <Workspace view = {view}/>
        <Panel view = {panel} />
        <CounterTools />
    </Builder>
}