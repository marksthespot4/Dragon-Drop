import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";


import Navbar from "../components/navbar";
import Edit from "../components/edit";
import Create from "../components/create";
import RecordList from "../components/recordList";


function CreatePage() {
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins:  [gjsPresetWebpage],
            pluginOpts: {
                gjsPresetWebpage: {}
            }
        });
        setEditor(editor);
    }, []);

    return (
        <div className="App">
            <div id="editor"></div>
        </div>
    );
}

export default CreatePage;