import React from "react"
import { Workspace } from "build-ui";
import CanvasView from "./components/canvas/CanvasView";
import SectionView from "./components/Section/SectionView";
import TextView from "./components/TextBox/TextView";
import ImageView from "./components/Image/ImageView";
import ButtonView from "./components/Button/ButtonView";
import BuilderSelector from "./hooks/BuilderSelector";

const DragonWorkspace = props => {
    const view = {
        Canvas: CanvasView,
        Section: SectionView,
        Text: TextView,
        Image: ImageView,
        Button: ButtonView,
    }

    return <React.Fragment {...props}>
        <Workspace view = {view} />
        <BuilderSelector />
    </React.Fragment>
}

export default DragonWorkspace;