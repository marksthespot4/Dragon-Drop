import {useCollector} from "build-ui";

const useDragonStyler = ({
    id,
}) => {
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: nodeSelector
    });
    const parentSelector = selectors => (
        selectors.selectParent(id)
    );
    const parent = useCollector({
        selector: parentSelector
    });
    function styles() {
        const positioned = !parent.node || (
            parent.node.type !== 'Grid'
        );
        const positionedStyle = {positioned: positioned}
        return {
            ...positionedStyle,
        }
    }
    function completeStyle(style) {
        const completedStyle = {
            ...style,
            ...styles(),
        }
        return completedStyle;
    }
    const stylerBag = {
        styles: styles(),
    }
    const utils = {
        completeStyle: completeStyle
    }
    const bag = {
        ...stylerBag,
        ...utils
    }
    return bag;
}

export default useDragonStyler;