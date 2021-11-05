import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { getPage } from "./../../components/page";


const TopBar = (props) => {
    const builder = useBuilder();
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        loadTree
    } = builder;


    // console.log(props.id);
    useEffect(() => {
        getPage(props.id).then(data => {
            // console.log(data.pagedata);
            // load(data.pagedata);
        });
        window.addEventListener('keydown', keydownHandler);
      }, []);  

    const load = (saveData) => {
        if(saveData != null) {  
            loadTree(saveData);
        }
    }
    const handleSave = () => {
        props.save(json());
        console.log(json());
    }

    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode == 90) handleUndo()
        else if(e.ctrlKey && e.keyCode == 89) handleRedo()
      }
    
    return <div>
        {/* <button onClick = {load}>
            Load
        </button> */}
        <Button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </Button>
        <Button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </Button>
        <Button onClick={() => {handleSave()}}>
            Save
        </Button>
    </div>
}

export default TopBar;