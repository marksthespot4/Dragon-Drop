import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';

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
        <Button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </Button>
        <Button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </Button>
    </div>
}

export default TopBar;