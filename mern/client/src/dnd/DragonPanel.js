import {Panel} from "build-ui";
import {CanvasPanel} from "./components/canvas/CanvasPanel";
import {ImagePanel} from "./components/Image/ImagePanel";
import {ButtonPanel} from "./components/Button/ButtonPanel";
import {TextPanel} from "./components/TextBox/TextPanel";
import {ShapePanel} from "./components/Shape/ShapePanel";
import HeaderPanel from "./components/Header/HeaderPanel";
import FooterPanel from "./components/Footer/FooterPanel";


const DragonPanel = props => {
    const view = {
        Canvas: CanvasPanel,
        Image: ImagePanel,
        Button: ButtonPanel,
        TextBox: TextPanel,
        Shape: ShapePanel,
        Header: HeaderPanel,
        Video: VideoPanel,
        Footer: FooterPanel,
    };
    return <Panel
        view = {view}
        {...props}
    />
}

export default DragonPanel;