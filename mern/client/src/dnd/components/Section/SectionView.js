import {DnDBuilderHOC} from 'build-ui';
import useDragonEditor from '../../hooks/useDragonEditor';
import useDragonStyler from '../../hooks/useDragonStyler';
import Resizable from '../../resizable/Resizable';
import useStyle from './style/SectionView';
import Section from './Section';

const ResizableSection = Resizable(Section);
const BuilderSection = DnDBuilderHOC(ResizableSection);

const SectionView = ({
    id,
    ...props
}) => {
    const editor = useDragonEditor({
        id: id,
    });
    const styler = useDragonStyler({
        id: id
    });
    const classes = useStyle({
        selected: editor.indexes.selected,
        hovering: editor.hovering,
        fixed: editor.meta.fixed,
    });
    return <BuilderSection
        onDragStart = {!editor.meta.fixed && editor.handlePositionedDragStart}
        onDragEnd = {!editor.meta.fixed && editor.handleDragEnd}
        onDrop = {editor.handlePositionedDrop}
        onDragEnter = {editor.handlePaintDropZone}
        onDragLeave = {editor.handleEraseDropZone}
        draggable = {!editor.meta.fixed}
        isResizing = {editor.indexes.selected}
        onResizeStart = {editor.handleResizeStart}
        onResize = {editor.handleResize}
        onResizeEnd = {editor.handleResizeEnd}
        ref = {editor.builder}
        onClick = {editor.handleSelect}
        className = {classes.view} 
        {...props}
        style = {styler.completeStyle(props.style)}
    />
}

export default SectionView;