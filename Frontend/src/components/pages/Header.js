import React from 'react'
import { NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import './CombinedCSS.css'


const Header = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-NavItemght bg-NavItemght bg-white py-3 shadow-sm">
                <div className='container'>
                    <NavbarBrand className="navbar-brand fw-bold fs-6" tag={ReactLink} to="/">
                        <b id="brandname"> FASHION STORE</b></NavbarBrand>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <NavItem className="nav-item active">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/aboutus">About</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/contactus">Contact</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="nav-NavItemnk" tag={ReactLink} to="/wishlist">
                                    <i className='fa fa-heart'> Wish List</i>
                                </NavLink>
                            </NavItem>
                           

                        </ul>
                        <div className="buttons">
                            <a href="/login" className="btn btn-outline-dark " >
                                <i className="fa fa-sign-in me-1"></i> Login</a>
                            <a href="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register</a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
