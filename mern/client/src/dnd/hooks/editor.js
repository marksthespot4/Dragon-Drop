import {useActions, useCollector, useEditor} from "build-ui"
import {useEffect, useRef, useState} from "react";
import {convertToPx, extractNumber, extractUnits} from "../utils/units";
import usePositioner from "./usePositioner";

const editor = params => {
    const id = params.id;
    const actions = useActions();
    const editor = useEditor(params);
    const nodeSelector = selectors => (
        selectors.selectById(id)
    );
    const collected = useCollector({
        selector: nodeSelector
    });
    const builder = useRef();

    function handleDelete(event) {
        actions.timeBatched.triggerDelete({
            id: id
        });
        event.stopPropagation();
    }
    function handleToggleFix(event) {
        const fixed = Boolean(collected.meta.fixed);
        const props = {
            fixed: !fixed
        };
        actions.unrecorded.triggerMetaUpdate({
            id: id,
            meta: props,
        });
        event.stopPropagation();
    }
    const handlers = {
        handlePositionedDragStart,
        handleResize,
        handleResizeStart,
        handleResizeEnd,
        handleSelect,
        handleDeselect,
        handlePaintDropZone,
        handleEraseDropZone,
        handleToggleFix,
        handleDelete,
    }
    const demoBag = {
        builder: builder,
        hovering: hovering,
    }
    const collectBag = {
        node: collected.node,
        meta: collected.meta,
        indexes: collected.indexes,
    }
    const bag = {
        ...editor,
        ...handlers,
        ...demoBag,
        ...collectBag,
    }
    return bag;
}

export default editor;