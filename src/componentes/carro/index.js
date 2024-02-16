import React, { useContext } from 'react'
import { DataContext } from '../coso/DataProvider'



export default function Carro() {
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu
    const[carro, setCarro] = value.carro
    const [total, setTotal] = value.total
    

    const tooglefalse = ()=> {
        setMenu(false)
    }

    const show1=menu ? "carritos show" : "carritos"
    const show2=menu ? "carrito show" : "carrito"

    const resta=id =>{
        carro.forEach(item=>{
            if(item.id === id){
                item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1
            }
            setCarro([...carro])
        })
    }
    const suma=id =>{
        carro.forEach(item=>{
            if(item.id === id){
                item.cantidad += 1
            }
            setCarro([...carro])
        })
    }
    const removeProducto= id =>{
        if(window.confirm("Quitar producto de la lista??")){
            carro.forEach((item, index) => {
                if(item.id === id){
                    item.cantidad= 1;
                    carro.splice(index,1)
                }
            })
        }
        setCarro([...carro])
    }

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
                                <box-icon name="up-arrow" type="solid" onClick={()=> suma(producto.id)}></box-icon>
                                <p className='cantidad'>{producto.cantidad}</p>
                                <box-icon name="down-arrow" type="solid" onClick={()=> resta(producto.id)}></box-icon>
                            </div>
                            <div className='remove_item' onClick={()=>removeProducto(producto.id)}>
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>                
                ))   
            }
            
            </div>
            <div className='carrito_footer'>
                <h3>Total: ${total} </h3>
                <button className='btn'>Pagar</button>
            </div>
        </div>
    </div>

    
  )
}
