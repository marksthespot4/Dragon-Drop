import {Panel} from "build-ui";
import {CanvasPanel} from "./components/canvas/CanvasPanel";
import {ImagePanel} from "./components/Image/ImagePanel";
import {ButtonPanel} from "./components/Button/ButtonPanel";
import {TextPanel} from "./components/TextBox/TextPanel";
import {ShapePanel} from "./components/Shape/ShapePanel";


const DragonPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Image: ImagePanel,
        Button: ButtonPanel,
        TextBox: TextPanel,
        Shape: ShapePanel,
    };
    return <Panel
        view = {view}
        {...props}
    />
}

export default DragonPanel;