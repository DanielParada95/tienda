import React, { useContext } from "react";
import Img from "../images/Img1.PNG"
import { DataContext } from "./coso/DataProvider.js";

export const Productoslist = () =>{
    const value = useContext(DataContext)
    const [producto] = value.producto

    console.log(producto)

    return (
        <>
        <h1 className="title">Productos</h1>
        <div className="producto">
            <div className="productos">
                <a href="#">
                <div className="productos-img">
                    <img src={Img} alt=""/>            
                </div>
                </a>
                <div className="producto__footer">
                    <h1 > Title </h1>
                    <p> Categoria </p>
                    <p className="price">$ tu cola</p>
                </div>
                <div className="buttom">
                    <button className="btn">Anadir al carrito</button>
                    <div>
                        <a href="#" className="btn">Ver</a>
                    </div>
                </div>
            </div>

            <div className="productos">
                <a href="#">
                <div className="productos-img">
                    <img src={Img} alt=""/>            
                </div>
                </a>
                <div className="producto__footer">
                    <h1 > Title </h1>
                    <p> Categoria </p>
                    <p className="price">$ tu cola</p>
                </div>
                <div className="buttom">
                    <button className="btn">Anadir al carrito</button>
                    <div>
                        <a href="#" className="btn">Ver</a>
                    </div>
                </div>
            </div>

            <div className="productos">
                <a href="#">
                <div className="productos-img">
                    <img src={Img} alt=""/>            
                </div>
                </a>
                <div className="producto__footer">
                    <h1 > Title </h1>
                    <p> Categoria </p>
                    <p className="price">$ tu cola</p>
                </div>
                <div className="buttom">
                    <button className="btn">Anadir al carrito</button>
                    <div>
                        <a href="#" className="btn">Ver</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}