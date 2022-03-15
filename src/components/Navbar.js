import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div>
            navbar goes here
            <ul>
            <li>
                {/* <Link to="/">Home</Link> */}
                Home
            </li>
            <li>
                More Projects
                {/* <Link to="https://suitcasecoder.github.io/SuitcaseCoder_Bootstrap_Portfolio/">More Projects</Link> */}
            </li>
            </ul>
        </div>
    )
}

export default Navbar;