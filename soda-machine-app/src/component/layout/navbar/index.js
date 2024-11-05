import React from "react";
import "./index.css";

const NavBar = () => {

    return (
        <>
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand" routerLink="/admin/home">
                        <span class="align-middle">AdminKit</span>
                    </a>

                    <ul class="sidebar-nav">
                        <li class="sidebar-header">
                            Pages
                        </li>

                        <li className='sidebar-item active'>
                            <a class="sidebar-link" >
                                <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Product</span>
                            </a>
                        </li>

                    </ul >
                </div >
            </nav >
        </>
    )
}

export default NavBar;