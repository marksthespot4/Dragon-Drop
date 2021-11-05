import DragonLayers from "../layers/DragonLayers";
import useStyle from "./style/SideBar";

const SideBar = props => {
    return <div {...props} />
}

const SidebarLayers = props => {
    const classes = useStyle();
    return <div {...props}>
        <div className = {classes.head}>
            <p className = {classes.title}>
                Layers
            </p>
        </div>
        <div>
            <DragonLayers />
        </div>
    </div>
}

export default SideBar;
export {SidebarLayers};