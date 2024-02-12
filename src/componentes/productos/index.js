import React, { useContext } from "react";
import { DataContext } from "../coso/DataProvider.js";
import { Productosinventario } from "./Productosinventario.js";

export const Productoslist = () =>{
    const value = useContext(DataContext)
    const [producto] = value.producto

    console.log(producto)

    return (
        <>
        <h1 className="title">Productos</h1>
        <div className="producto">
            {
                producto.map(producto =>(
                    <Productosinventario 
                    key={producto.id}
                    id={producto.id}
                    name={producto.name}
                    imagenUrl={producto.imageUrl}
                    price={producto.price}
                    />
                ))
            }
           
        </div>
        </>
    )
}