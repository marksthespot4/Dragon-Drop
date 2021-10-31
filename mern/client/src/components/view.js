import React, { useEffect, useState } from "react";
import { getPage } from "./page";

export default (props) => {
    const [preview, setPagePreview] = useState();

    useEffect(() => {
        getPage(props.match.params.id).then(data => {
            console.log(data.pagepreview);
            setPagePreview(data.pagepreview);
        }); 
    }, []);   

    return (
        <div>
            {/* <button onClick={()=> {}}>
            </button> */}
            <img width={"100%"} src={preview} alt={""} />
        </div>
        );
    };