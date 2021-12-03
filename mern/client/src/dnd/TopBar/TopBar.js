import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useLayoutEffect, useState, useReducer, useRef } from "react";
import { getPage } from "./../../components/page";
import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';
import "./save.css";
import useExporter from "../hooks/useExporter";
import {unstable_batchedUpdates as batch} from "react-dom";

const TopBar = ({
    className,
    ...props
}) => {
    const [tree, setTree] = useState(null);
    const [lastSave, setLastSave] = useState(null);
    const [count, setCount] = useState(0);
    // const [treeSize, setTreeSize] = useState(0);

    const builder = useBuilder();
    const exporter = useExporter();
    const exporterHTML = useRef();
    const exporterCSS = useRef();
    const [exporting, setExporting] = useState(false);
    const [htmlLink, setHTMLLink] = useState(null);
    const [cssLink, setCSSLink] = useState(null);
    const [file, setFile] = useState(null);
    
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        loadTree
    } = builder;

    
    useEffect(() => {
        getPage(props.id).then(data => {
            // console.log(data.pagedata);
            load(data.pagedata);
        });
        window.addEventListener('keydown', keydownHandler);
        // const interval = setInterval(() => {
        //     // handleSave();
        //     setTree(json());
        //     var currentTime = new Date();
        //     var hour = ('0'+currentTime.getHours()).substr(-2);
        //     var minute = ('0'+currentTime.getMinutes()).substr(-2);
        //     var second = ('0'+currentTime.getSeconds()).substr(-2);
        //     setLastSave(hour + ':' + minute + ':' + second)
        // }, 10000);
        // return () => {//stop interval on unmount
        //     clearInterval(interval);
        // }
      }, []);  

    //Most recent attempt at autosave  
    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count + 1);
    //         handleSave();
    //         var currentTime = new Date();
    //         var hour = ('0'+currentTime.getHours()).substr(-2);
    //         var minute = ('0'+currentTime.getMinutes()).substr(-2);
    //         var second = ('0'+currentTime.getSeconds()).substr(-2);
    //         setLastSave(hour + ':' + minute + ':' + second)
    //     }, 15000);
    //     return () => {clearInterval(interval); setCount(0)}
    //   }, [count]);

    //save every time the tree size increases. 
    //Too many updates to the tree. Checking if the tree was increased in size is too much computation
    // useEffect(() => {
    //     console.log(Object.keys(json().byIds).length);

    //     if(Object.keys(json().byIds).length == treeSize + 1) {
    //         console.log(treeSize);
    //         setTimeout(() => {
    //             handleSave();
    //             var currentTime = new Date();
    //             var hour = ('0'+currentTime.getHours()).substr(-2);
    //             var minute = ('0'+currentTime.getMinutes()).substr(-2);
    //             var second = ('0'+currentTime.getSeconds()).substr(-2);
    //             setLastSave(hour + ':' + minute + ':' + second)     
    //         }, 3000);
    //         setTreeSize(Object.keys(json().byIds).length);
    //     }
    // }, [json()]);  

    const notifySaved = () => { 
        toast.success('Project Saved');
    }

    const notifyCopied = () => {
        toast.success('Component Copied!');
    }

    const notifyPasted = () => {
        toast.success('Component Pasted!');
    }

    const load = (saveData) => {
        if(saveData != null) {  
            loadTree(saveData);
            // setTreeSize(Object.keys(saveData.byIds).length);
            // setTree(saveData);
        }
    }
    const handleSave = () => {
        props.save(json());
        console.log(json());
    }

    const handleExport = () => {
        exporter.handleExport();
        console.log('exporting!');
        setExporting(true);
    }

    useEffect(() => {
        if (!file) return;
        const content = file.text();
        content.then(text => JSON.parse(text))
        .then(tree => batch(() => {
            loadTree(tree);
            setFile(null);
        })).catch();
    });

    const css = exporter.css;
    const html = exporter.html;
    useEffect(() => {
        if (!exporting) return;
        console.log(css);
        console.log(html);
        if (css) {
            const file = new Blob([css], {type: 'text/css'});
            const link = URL.createObjectURL(file);
            setCSSLink(link);
            setExporting(false);
        }
        if (html) {
            const formatHTML = html => (
                '<html>' +
                '<head></head>' +
                '<body>' + html + '</body>' +
                '</html>'
            );
            const formattedHTML = formatHTML(html);
            const file = new Blob([formattedHTML], {type: 'text/html'});
            const link = URL.createObjectURL(file);
            setHTMLLink(link);
            setExporting(false);
        }
    }, [
        html, 
        css, 
        exporting,
    ]);

    useEffect(() => {
        if (!htmlLink) return;
        exporterHTML.current.click();
        URL.revokeObjectURL(htmlLink);
        setHTMLLink(null);
    }, [htmlLink]);

    useEffect(() => {
        if (!cssLink) return;
        exporterCSS.current.click();
        URL.revokeObjectURL(cssLink);
        setCSSLink(null);
    }, [cssLink]);

    // const handleSave = () => {
    //     setTree(json());
    // }
    const handleShare = () => {
        handleSave();
        navigator.clipboard.writeText("http://localhost:3000/view-page/" + props.id);
        // props.history.push("/view-page/" + props.id)
        notify();
    }

    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode === 90) handleUndo()
        else if(e.ctrlKey && e.keyCode === 89) handleRedo()
        else if(e.ctrlKey && e.keyCode === 67) notifyCopied()
        else if(e.ctrlKey && e.keyCode === 86) notifyPasted()
        else if (e.ctrlKey && e.keyCode == 88) toast.info("Text selected")
        else if(e.ctrlKey && e.keyCode == 73) toast.info("Image selected")
        else if(e.ctrlKey && e.keyCode == 66) toast.info("Button selected")
        else if(e.ctrlKey && e.keyCode == 77) toast.info("Shape selected")
        else if(e.ctrlKey && e.keyCode == 69) toast.info("Section selected")
    }

    const notify = () => { 
        toast.info('Shareable link copied to clipboard');
    }
    
    return <div>
        <div align="right">
            <ToastContainer 
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
        {/* <button onClick = {load}>
            Load
        </button> */}

        <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
        />
        <Button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </Button>
        <Button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </Button>
        
        <Button onClick={() => {handleSave(); notifySaved()}}>
            Save
        </Button>
        {lastSave === null
        ?
        <></>
        :    
        <span className="notif">
            Last Saved: {lastSave}
        </span>
        }
        <Button onClick={handleExport}>
            Download
        </Button>
        <a
            hidden = {false}
            download = {true}
            href = {htmlLink}
            ref = {exporterHTML}
        />
        <a
            hidden = {false}
            download = {true}
            href = {cssLink}
            ref = {exporterCSS}
        />
        
    
        <a href={"/view-page/" + props.id} style={{"color":"white"}} id="share">
            <Button
                variant="secondary"
                style={{right:"95px",position:"absolute"}}
                // onClick={() => {handlePreview()}}
            >
                Preview Page
            </Button>
        </a>
        <Button
            variant="secondary"
            style={{right:"0px", position:"absolute"}}
            onClick={() => {handleShare()}}
        >
                Share&nbsp;
                <i class="bi bi-share"></i>
        </Button>
    </div>
}

export default TopBar;