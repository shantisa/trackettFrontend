import React from "react";
import '../styles/NavStyle.scss'
import NavbarViewModel from "../ViewModel/NavbarViewModel";
import defaultAvatar from '../../resources/icons/avatars/avatar1.svg';
export default function Navbar(){
    const viewModel = NavbarViewModel();

    if(viewModel.isLoggedIn){
        return(
            <ul className="nav">
                <input type="checkbox" id="check" />
                <li><a id="logo" href="/" >TR<i className="fa-solid fa-sm fa-road"></i>CKETT</a></li>

                <div className="searchBar">
                    <input type="search" className="searchInput" placeholder="Search"/>
                    <button className="btn searchBtn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <li className="dropdwn">
                    <button className="btn dropbtn" type="button">
                        <img src={defaultAvatar} alt="avatar" id="avatar"/>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    <div className="dropdwn-content">
                        <a href="/">Profile</a>
                        <a href="/">Sign Out</a>
                    </div>
                </li>
                <label for="check" className="bar">
                    <span className="fa-solid fa-bars" id="bars"></span>
                    <span className="fa-solid fa-xmark" id="times"></span>
                </label>
            </ul>
        );
    } else{
        return(
            <ul className="nav">
                <li><a id="logo" href="/" >TR<i className="fa-solid fa-sm fa-road"></i>CKETT</a></li>
            </ul>
        );
    }

}