import { BackgroundPanel } from "../../panels/PalettePanel";
import SizingPanel from "../../panels/SizingPanel";

const CanvasPanel = ({
    id,
}) => {
    return <div>
        <BackgroundPanel id = {id} />
        <SizingPanel id = {id} />
    </div>
}

export default CanvasPanel;