import {getContentClientRect} from "./dom";

export const extractNumber = obj => {
    if (typeof obj !== 'string') {
        return null;
    }
    const match = obj.match(/^[+-]?\d+(\.\d+)?/);
    if (!match) {
        return null;
    }
    return Number.parseFloat(match.shift());
}

export const extractUnits = obj => {
    if (typeof obj !== 'string') {
        return null;
    }
    const match = obj.match(/^[+-]?\d+(\.\d+)?/);
    if (!match) {
        return null;
    }
    return obj.replace(match.shift(), '');
}

export const convertToPx = (
    measure, 
    options = {}
) => {
    const {
        target = document,
        targetAsContainer = true,
        rectProperty = 'width',
        withProperties = {},
    } = options;
    const element = document.createElement('div');
    element.style.visibility = 'hidden';
    element.style.overflow = 'hidden';
    const appendingToElement = (
        targetAsContainer 
        ? target 
        : target.parentElement
    );
    appendingToElement.appendChild(element);
    const value = extractNumber(measure);
    const units = extractUnits(measure);
    const baseline = 10;
    element.style[rectProperty] = baseline + units;
    Object.keys(withProperties).forEach(property => (
        element.style[property] = withProperties[property]
    ));
    const defaultOffsetParentRect = {
        left: 0,
        right: 0,
        width: 0,
        height: 0,
    };
    const calculatedOffsetParentRect = (
        element.offsetParent && 
        getContentClientRect(element.offsetParent)
    );
    const offsetParentRect = (
        calculatedOffsetParentRect ||
        defaultOffsetParentRect
    );
    const offsetParent = element.offsetParent;
    const offsetParentScroll = {
        top: offsetParent ? offsetParent.scrollTop : 0,
        left: offsetParent ? offsetParent.scrollLeft : 0,        
    }
    const elementRect = element.getBoundingClientRect();
    const rect = {
        top: (
            elementRect.top + 
            offsetParentScroll.top -
            offsetParentRect.top
        ),
        left: (
            elementRect.left + 
            offsetParentScroll.left - 
            offsetParentRect.left
        ),
        width: elementRect.width,
        height: elementRect.height,
    };
    const conversion = rect[rectProperty] / baseline;
    appendingToElement.removeChild(element);
    return value * conversion;
}