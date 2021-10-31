export const getContentClientRect = target => {
    const rect = target.getBoundingClientRect();
    const cs = getComputedStyle(target);

    const borderTop = Number.parseFloat(cs.borderTopWidth);
    const borderBottom = Number.parseFloat(cs.borderBottomWidth);
    const borderRight = Number.parseFloat(cs.borderRightWidth);
    const borderLeft = Number.parseFloat(cs.borderLeftWidth);
    const paddingTop = Number.parseFloat(cs.paddingTop);
    const paddingBottom = Number.parseFloat(cs.paddingBottom);
    const paddingLeft =  Number.parseFloat(cs.paddingLeft);
    const paddingRight = Number.parseFloat(cs.paddingRight);

    const contentRect = {
        width: rect.width - (borderLeft + borderRight + paddingLeft + paddingRight),
        height: rect.height - (borderBottom + borderTop + paddingBottom + paddingTop),
        left: rect.left + (borderLeft + paddingLeft),
        right: rect.right + (borderRight + paddingRight),
        top: rect.top + (borderTop + paddingTop),
        bottom: rect.bottom + (borderBottom + paddingBottom),
    }
    return contentRect;
}