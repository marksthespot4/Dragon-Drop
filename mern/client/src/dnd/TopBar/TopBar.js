import {useBuilder} from "build-ui";

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
    if(props.prevSave != null) {
        loadTree(props.prevSave);
        console.log(props.prevSave);
    }
    const handleSave = () => {
        props.save(json());
        console.log(json());
    }
    return <div>
        <button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </button>
        <button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </button>
        <button onClick={() => {handleSave()}}>
            save
        </button>
    </div>
}

export default TopBar;