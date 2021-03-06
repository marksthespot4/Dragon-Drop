import {useBuilder} from "build-ui";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { getPage } from "./../../components/page";
// import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';

const TopBarView = (props) => {
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
      }, []);  

    const load = (saveData) => {
        if(saveData != null) {  
            loadTree(saveData);
        }
    }

    const handleShare = () => {
        navigator.clipboard.writeText("http://localhost:3000/view-page/" + props.id);
        notify();
    }

    const notify = () => { 
        toast.info('Shareable link copied to clipboard');
    }
    
    return <div>
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

export default TopBarView;