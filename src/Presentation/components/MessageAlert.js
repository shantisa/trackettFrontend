import React from "react";
import '../styles/MessageStyle.scss'

export default function MessageAlert(props){
    return(
        <div className="alertContainer">
            <span className="exitBtn" onClick={props.clearMsg}>&times;</span>
            {props.btnLabel}
        </div>
    );
}