import React from 'react'

export const Productosinventario = ({
    id,
    name,
    imagenUrl,
    price
}) => {

  return (

            <div className="productos">
            <a href="#">
                <div className="productos-img">
                    <img url={imagenUrl} alt={name}/>            
                </div>
            </a>
            <div className="producto__footer">
                <h1 > {name} </h1>
                
                <p className="price">$ {price}</p>
            </div>
                <div className="buttom">
                    <button className="btn">Anadir al carrito</button>
                </div>
            </div>
        
  )
}
