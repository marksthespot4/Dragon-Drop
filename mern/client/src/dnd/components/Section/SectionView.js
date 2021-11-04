import {DnDBuilderHOC} from 'build-ui';
import useDragonEditor from '../../hooks/useDragonEditor';
import useDragonStyler from '../../hooks/useDragonStyler';
import Resizable from '../../resizable/Resizable';
import useStyle from '../canvas/style/Canvas';
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
    });
    return <BuilderSection
        onDragStart = {editor.handlePositionedDragStart}
        onDragEnd = {editor.handleDragEnd}
        draggable = {true}
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