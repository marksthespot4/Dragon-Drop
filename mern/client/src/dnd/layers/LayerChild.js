import { useView } from "build-ui";
import useStyle from './styles/LayerChild';
import DnDLayers from "./DnDLayers";
import Layer from "./Layer";
import useLayerDrag from "../hooks/layerhooks/useLayerDrag";
import clsx from "clsx";

const LayerChild = ({
    id,
    depth,
    className,
    ...rest
}) => {
    const view = useView();
    const drag = useLayerDrag({
        id: id
    });
    const classes = useStyle({
        borderTop: drag.hover === drag.hover_top,
        borderBottom: drag.hover === drag.hover_bottom,
    });
    const classAll = clsx(
        classes.child,
        className,
    )
    return <DnDLayers
        onDragOver = {drag.handleDragOver}
        onDragEnter = {drag.handleDragEnter}
        onDragLeave = {drag.handleDragLeave}
        className = {classAll}
        {...rest}
    >
        <Layer 
            id = {id}
            depth = {depth}
            view = {view}
        />
    </DnDLayers>
}

export default LayerChild;