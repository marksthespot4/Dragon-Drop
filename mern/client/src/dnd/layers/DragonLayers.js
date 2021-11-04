import Layers from "./Layers";
import LayerDraggable from "./LayerDraggable";
import LayerDroppable from "./LayerDroppable";

const DragonLayers = () => {
    const view = {
        Canvas: LayerDroppable,
        Section: LayerDroppable,
        Image: LayerDraggable,
        Text: LayerDraggable,
        Button: LayerDraggable,
        Grid: LayerDroppable
    }
    return <Layers view = {view} />
}

export default DragonLayers;