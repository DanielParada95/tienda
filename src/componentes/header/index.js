import React from "react";
import { Link } from "react-router-dom";

export const Headers = () =>{
    return (
        <header>
            <a>
                <div className="menu">
                    <box-icon name='store-alt'></box-icon>
                </div>
            </a>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
            <div className="Carro">
                <box-icon name='cart-alt' type='solid' ></box-icon>
                <span className="total_item">0</span>
            </div>

        </header>
    )
}