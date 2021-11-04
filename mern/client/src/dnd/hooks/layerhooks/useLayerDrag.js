import { useDnDHelpers } from "build-ui";
import useLayerHover from "./useLayerHover";

const useLayerDrag = ({
    id,
}) => {
    const hover = useLayerHover({
        id: id
    });
    const helpers = useDnDHelpers();
    function handleDragOver(event) {
        const {getDnDEventPosition} = helpers;
        const position = getDnDEventPosition(event);
        const top = position.top;
        const layer_hover = top ? 'top' : 'bottom';
        hover.handleHover(event, layer_hover);
    }
    function handleDragEnter(event) {
        hover.handleHoverEnter(event);
    }
    function handleDragLeave(event) {
        hover.handleHoverLeave(event);
    }
    const dragBag = {
        hover: hover.hover,
    };
    const handlers = {
        handleDragOver,
        handleDragEnter,
        handleDragLeave,
    }
    const constants = {
        hover_top: 'top',
        hover_bottom: 'bottom',
    };
    const bag = {
        ...dragBag,
        ...handlers,
        ...constants,
    }
    return bag;
}

export default useLayerDrag;