import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";


const TopBar = (props) => {

    console.log(props.prevSave);
    const builder = useBuilder();
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        loadTree
    } = builder;


    useEffect(() => {
        console.log("helppppppp im stuck in here!! anybody out there?");
        load();
      }, []);  

    const load = () => {
        console.log(props.prevSave);
        if(props.prevSave != null) {  
            loadTree(props.prevSave);
        }
    }
    const handleSave = () => {
        props.save(json());
        console.log(json());
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
            save
        </Button>
    </div>
}

export default TopBar;