import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';

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