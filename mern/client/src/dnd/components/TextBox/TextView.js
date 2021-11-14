import React, {useEffect, useState} from 'react';
import { DnDBuilderHOC } from 'build-ui';
import useDragonEditor from '../../hooks/useDragonEditor';
import useDragonStyler from '../../hooks/useDragonStyler';
import Resizable from '../../resizable/Resizable';
import Text from './Text';
import TextInput from './TextInput';
import useStyle from './style/TextView';

const BuilderText = DnDBuilderHOC(Resizable(Text));
const BuilderTextInput = DnDBuilderHOC(Resizable(TextInput));

const TextView = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id,
    });
    const styler = useDragonStyler({
        id: id
    });
    const [editing, setEditing] = useState(false);
    const handleSelect = event => {
        editor.handleSelect(event);
        setEditing(true);
    }
    const selected = editor.indexes.selected; 
    useEffect(() => {
        if (selected) return;
        setEditing(false);
    }, [selected]);
    const classes = useStyle({
        selected: selected,
        fixed: editor.meta.fixed,
    });
    const BuilderTextComponent = (
        !editing 
        ? BuilderText 
        : BuilderTextInput
    );
    return <BuilderTextComponent
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        draggable = {!editor.meta.fixed}
        isResizing = {editor.indexes.selected}
        onResizeStart = {editor.handleResizeStart}
        onResize = {editor.handleResize}
        onResizeEnd = {editor.handleResizeEnd}
        ref = {editor.builder}
        className = {classes.view}
        onClick = {handleSelect}
        {...(!editing && props)}
        {...(editing && {
            name: 'text',
            value: props.text,
            onChange: editor.handleUpdate,
        })}
        style = {styler.completeStyle(props.style)}
    />

}

export default TextView;