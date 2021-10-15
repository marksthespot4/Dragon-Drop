import {useBuilder} from "build-ui";

const TopBar = () => {
    const builder = useBuilder();
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        loadTree
    } = builder;
    const handleSave = () => {
        console.log(json());
    }
    return <div>
        <button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </button>
        <button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </button>
    </div>
}

export default TopBar;