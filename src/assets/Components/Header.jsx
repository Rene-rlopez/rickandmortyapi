import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'
import Characters from './Characters.jsx'
import Search from './Search.jsx'
import Developers from './Developers.jsx'
import Logout from './Logout.jsx';

export default function Header(){
    return(
        <BrowserRouter>
                
                    <nav className="navbar navbar-expand-md fixed-top bg-color1 border-bottom">
                        <div className="container-fluid">
                            <a className="navbar-brand" id='ft-color2' href="#">
                                <i className="fa-brands fa-react"></i>Rick&Morty
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-2">
                                <Link to='/' className="nav-Link" id='ft-color1' aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                <Link to='/Characters' className="nav-Link" id='ft-color1' href="#">Characters</Link>
                                </li>
                                <li className="nav-item mx-2">
                                <Link to='/Search' className="nav-Link" id='ft-color1' href="#">Search</Link>
                                </li>
                                <li className="nav-item mx-2">
                                <Link to='/Developers' className="nav-Link" id='ft-color1' href="#">Developers</Link>
                                </li>
                                <li>
                                    
                                </li>
                            </ul>
                            <Logout className="btn btn-outline-success"/>
                            </div>
                        </div>
                    </nav>

                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Characters' element={<Characters />}/>
                    <Route path='/Search' element={<Search />}/>
                    <Route path='/Developers' element={<Developers />}/>
                </Routes>

        </BrowserRouter>
    );
}