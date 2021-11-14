import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import { getPage } from "./../../components/page";
import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';
import "./save.css";

const TopBar = (props) => {
    // const [tree, setTree] = useState(null);
    const [lastSave, setLastSave] = useState(null);
    const [treeSize, setTreeSize] = useState(0);

    const builder = useBuilder();
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
        //     handleSave();
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

    useEffect(() => {
        // console.log(json().byIds.length());
        console.log(Object.keys(json().byIds).length);

        if(Object.keys(json().byIds).length == treeSize + 1) {
            console.log(treeSize);
            setTimeout(() => {
                handleSave();
                var currentTime = new Date();
                var hour = ('0'+currentTime.getHours()).substr(-2);
                var minute = ('0'+currentTime.getMinutes()).substr(-2);
                var second = ('0'+currentTime.getSeconds()).substr(-2);
                setLastSave(hour + ':' + minute + ':' + second)     
            }, 3000);
            setTreeSize(Object.keys(json().byIds).length);
        }
    }, [json()]);  

    const notify = () => { 
        toast.success('Project Saved');
      }

    const load = (saveData) => {
        if(saveData != null) {  
            loadTree(saveData);
            setTreeSize(Object.keys(saveData.byIds).length);
            // setTree(saveData);
        }
    }
    const handleSave = () => {
        props.save(json());
        console.log(json());
    }

    // const handleSave = () => {
    //     setTree(json());
    // }

    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode == 90) handleUndo()
        else if(e.ctrlKey && e.keyCode == 89) handleRedo()
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
        <Button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </Button>
        <Button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </Button>
        <Button onClick={() => {handleSave(); notify()}}>
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
    </div>
}

export default TopBar;