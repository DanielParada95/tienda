import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../coso/DataProvider";


export const Headers = () =>{
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [carro, setCarro] = value.carro

    const toogletrue= () =>{
        setMenu(!menu)
    }

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
            <div className="Carro" onClick={toogletrue}>
                <box-icon name='cart-alt' type='solid' ></box-icon>
                <span className="total_item">{carro.length}</span>
            </div>

        </header>
    )
}