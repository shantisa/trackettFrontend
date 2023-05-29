import React from "react";
import '../styles/ButtonStyle.scss'
export default function TabButton(props){
    return(
        <button type="button" className="btn btn-default btn-lg rounded-0 btnComponent" style={{
            borderBottom: props.selected
                ? "4px solid white" : "none",  color: props.selected ? "white" : "black" }} onClick={props.onClick}>{props.btnLabel}
        </button>
    );
}