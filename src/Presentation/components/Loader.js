import React from "react";
import '../styles/LoaderStyle.scss'

export default function Loader(){
    return(
        <div className="loaderContainer">
            <div className="loader">  </div>
                <p id="loadText">Loading...</p>
        </div>
    );
}