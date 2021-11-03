import {isFunction} from "./function";
import { deepmerge } from "@mui/utils";

function combineStyles(...styles) {
    return function CombineStyles(theme) {
        const outStyles = styles.map((arg) => {
            if (isFunction(arg)) {
                return arg(theme);
            }
            return arg;
        });
        return outStyles.reduce((acc, val) => deepmerge(acc, val), {});
    }
}

export default combineStyles;
