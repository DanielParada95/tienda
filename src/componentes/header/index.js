import React from "react";

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
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
            </ul>
            <div className="Carro">
                <box-icon name='cart-alt' type='solid' ></box-icon>
                <span className="total_item">0</span>
            </div>

        </header>
    )
}