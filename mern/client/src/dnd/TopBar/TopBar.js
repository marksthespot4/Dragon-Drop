import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { getPage } from "./../../components/page";
// import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';

const TopBar = (props) => {
    const builder = useBuilder();
    const {
        canUndo,
        canRedo,
        handleRedo,
        handleUndo,
        json,
        loadTree
    } = builder;


    // console.log(props.id);
    useEffect(() => {
        getPage(props.id).then(data => {
            // console.log(data.pagedata);
            load(data.pagedata);
        });
        window.addEventListener('keydown', keydownHandler);
      }, []);  

    const load = (saveData) => {
        if(saveData != null) {  
            loadTree(saveData);
        }
    }
    const handleSave = () => {
        // const screenshotTarget = document.body;
        // html2canvas(screenshotTarget).then((canvas) => {
        //   const base64image = canvas.toDataURL("image/png");
        //   window.location.href = base64image;
        // });
        props.save(json());
        console.log(json());
    }

    const handleShare = () => {
        handleSave();
        navigator.clipboard.writeText("http://localhost:3000/view-page/" + props.id);
        // props.history.push("/view-page/" + props.id)
        notify();
    }

    const keydownHandler = (e) => {
        if(e.ctrlKey && e.keyCode == 90) handleUndo()
        else if(e.ctrlKey && e.keyCode == 89) handleRedo()
    }

    const notify = () => { 
        toast.info('Shareable link copied to clipboard');
    }
    
    return <div>
        {/* <button onClick = {load}>
            Load
        </button> */}

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
        <Button disabled = {!canUndo} onClick = {handleUndo}>
            Undo
        </Button>
        <Button disabled = {!canRedo} onClick = {handleRedo}>
            Redo
        </Button>
        <Button onClick={() => {handleSave()}}>
            Save
        </Button>
    
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