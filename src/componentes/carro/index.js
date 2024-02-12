import React, { useContext } from 'react'
import { DataContext } from '../coso/DataProvider'



export default function Carro() {
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu
    const[carro, setCarro] = value.carro
    

    const tooglefalse = ()=> {
        setMenu(false)
    }

    const show1=menu ? "carritos show" : "carritos"
    const show2=menu ? "carrito show" : "carrito"

  return (
    <div className={show1}>
        <div className={show2}>
            <div className='carrito_cerrar' onClick={tooglefalse}>
                <box-icon name= "x"></box-icon>
            </div>
            <h2>Su Lista</h2>
            <div className='carrito_centro' >
            {
                carro.map((producto)=>(    
                        <div className='carrito_item'>
                            <img src={producto.imageUrl} alt={producto.name}/>
                            <div>
                                <h3>{producto.name}</h3>
                                <p className='price'>${producto.price}</p>
                            </div>
                            <div>
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className='cantidad'>{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className='remove_item'>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>                
                ))   
            }
            </div>
            <div className='carrito_footer'>
                <h3>total </h3>
                <button className='btn'>Pagar</button>
            </div>
        </div>
    </div>

    
  )
}
