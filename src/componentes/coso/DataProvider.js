import React, {  useEffect, createContext, useState } from "react";
import SHOE_DATA from "../../Data";


export const DataContext = createContext();

export const DataProvider= (props) =>{
    const [producto, setProducto] = useState([])

    useEffect(()=> {
        const producto = SHOE_DATA
        if (producto) {
            setProducto(producto)
        }else{
            setProducto([])
        }
    },[])

    const value = {
        producto : [producto]
    }
    
    return(
        <DataContext.Provider value= {value}>
            {props.children}
        </DataContext.Provider>
    )
}