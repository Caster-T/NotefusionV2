import React from 'react';
import { Link } from 'react-router-dom';
import './toolBar.css';
import AddNode1 from '../addNode';


const Toolbar = ({ setNodes }) => {
    return (
    <>
    <nav className="toolbar">
        <h1 className="site-title">NoteFusion</h1>
        <div className="nav-items">
            <ul>
                <Link to ="/Proyectos">Proyectos</Link>
                <button  className='btnCloud'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" class="icon"><path d="M22,15.04C22,17.23 20.24,19 18.07,19H5.93C3.76,19 2,17.23 2,15.04C2,13.07 3.43,11.44 5.31,11.14C5.28,11 5.27,10.86 5.27,10.71C5.27,9.33 6.38,8.2 7.76,8.2C8.37,8.2 8.94,8.43 9.37,8.8C10.14,7.05 11.13,5.44 13.91,5.44C17.28,5.44 18.87,8.06 18.87,10.83C18.87,10.94 18.87,11.06 18.86,11.17C20.65,11.54 22,13.13 22,15.04Z"></path></svg></button>
            </ul>
        </div>
    </nav>
    </>
    );
};

export default Toolbar;