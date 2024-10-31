import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './toolBar.css';

const Toolbar = ({ setNodes, onSaveCanvas }) => {
    const { titulo } = useParams();
    return (
        <>
            <nav className="toolbar">
                <h1 className="site-title">{titulo}</h1>
                <div className="nav-items">
                    <ul>
                        <Link to="/proyectos">Proyectos</Link>
                        <label for="checkboxInput" class="bookmark">
                        <input type="checkbox" id="checkboxInput" onClick={onSaveCanvas} />
                        <svg width="15"
                            viewBox="0 0 50 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="svgIcon">
                                <path d="M46 62.0085L46 3.88139L3.99609 3.88139L3.99609 62.0085L24.5 45.5L46 62.0085Z"
                                    stroke="black"
                                    stroke-width="7"
                                ></path>
                        </svg>
                        </label>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Toolbar;
        