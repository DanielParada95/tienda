import React, {  useEffect, createContext, useState } from "react";
import SHOE_DATA from "../../Data";


export const DataContext = createContext();

export const DataProvider= (props) =>{
    const [producto, setProducto] = useState([])
    const [menu, setMenu] = useState(false)
    const [carro, setCarro] = useState ([])
    const [total, setTotal] = useState (0)

    useEffect(()=> {
        const producto = SHOE_DATA
        if (producto) {
            setProducto(producto)
        }else{
            setProducto([])
        }
    },[])

    const addCarro=(id) =>{
        const check = carro.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = producto.filter(producto=> {
                return producto.id === id
            })
            setCarro([...carro, ...data])
        }else{
            alert("Ya se añadio el producto")
        }
    }

    useEffect(()=> {
        const dataCarro = JSON.parse(localStorage.getItem('dataCarro')
        )
        if(dataCarro){
            setCarro(dataCarro)
        }
    }, [])

    useEffect(()=>{
        localStorage.getItem('dataCarro', JSON.stringify(carro))
    },[carro])

    useEffect(()=> {
        const getTotal = () =>{
            const res = carro.reduce((prev, item) => {
                return prev + (item.price * item.cantidad)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carro])

    const value = {
        producto : [producto],
        menu: [menu,setMenu],
        addCarro: addCarro,
        carro:[carro, setCarro],
        total: [total, setTotal]
    }
    
    return(
        <DataContext.Provider value= {value}>
            {props.children}
        </DataContext.Provider>
    )
}