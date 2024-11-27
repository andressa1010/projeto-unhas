import React from "react";
import { Link } from "react-router-dom";



const Menu = () => {
    return ( 
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Menu;