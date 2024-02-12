import React, { useContext } from 'react'
import { DataContext } from '../coso/DataProvider';
import { Link } from 'react-router-dom';


export const Productosinventario = ({
    id,
    name,
    imagenUrl,
    price
}) => {

    const value= useContext(DataContext)
    const addCarro = value.addCarro
    console.log(imagenUrl);
  return (

            <div className="productos">
            <a href="#">
                <div className="productos-img">
                    <img src={imagenUrl} />         
                </div>
            </a>
            <div className="producto__footer">
                <h1 > {name} </h1>
                
                <p className="price">$ {price}</p>
            </div>
                <div className="buttom">
                    <button className="btn" onClick={()=> addCarro(id)}>Anadir al carrito</button>
                </div>
            </div>
        
  )
}
