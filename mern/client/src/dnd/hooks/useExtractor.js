import {useActions, useCollector} from 'build-ui';
import { useEffect } from 'react';

const useExtractor = (
    id,
    root
) => {
    const actions = useActions();

    const selector = selectors => (selectors.selectById(id));
    const collected = useCollector({
        selector: selector
    });
    const exporting = (collected.meta.exporting || false);

    useEffect(() => {
        const htmlRoot = root.current;
        if (!exporting || !htmlRoot) return;
        const html = htmlRoot.outerHTML;
        const cssNodes = [
            htmlRoot,
            ...htmlRoot.getElementsByTagName('*')
        ];
        
        function shouldIncludeCSSRule(cssRule) {
            if (cssRule.selectorText) {
                const selectorText = cssRule.selectorText;
                const selector = selectorText.replace(/:(\S)+/, '');
                const match = cssNodes.some(node => {
                    try {
                        return node.matches(selector);
                    }
                    catch (e) {
                        return false;
                    }
                });
                return match;
            }
            if (cssRule.cssRules) {
                const cssSubrules = cssRule.cssRules;
                return [...cssSubrules].some(shouldIncludeCSSRule);
            }
            else {
                return true;
            }
        }
        const css = [...document.styleSheets].map(sheet => {
            try {
                const cssRules = sheet.cssRules;
                const rules = [...cssRules].map(cssRule => {
                    if (shouldIncludeCSSRule(cssRule)) {
                        return cssRule.cssText;
                    }
                    else {
                        return '';
                    }
                })
                return rules.join('');
            }
            catch (e) {}
        })
        .filter(Boolean)
        .join('');
        const meta = {
            exporting: false,
            html: html,
            css: css
        };
        triggerMetaUpdate({
            id: id,
            meta: meta,
        });
    });
}

export default useExtractor;