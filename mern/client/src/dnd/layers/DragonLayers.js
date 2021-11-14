import Layers from "./Layers";
import LayerDraggable from "./LayerDraggable";
import LayerDroppable from "./LayerDroppable";

const DragonLayers = () => {
    const view = {
        Canvas: LayerDroppable,
        Section: LayerDroppable,
        Shape: LayerDraggable,
        Image: LayerDraggable,
        Text: LayerDraggable,
        Video: LayerDraggable,
        Button: LayerDraggable,
    }
    return <Layers view = {view} />
}

export default DragonLayers;