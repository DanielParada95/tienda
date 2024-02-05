import React from "react";
import {Routes, Route} from "react-router-dom"
import { Inicio } from "./inicio";
import { Productoslist } from "./productos";


export const Paginas = () =>{
    return (
        <section>
            <Routes>
                <Route path="/" exact Component={Inicio}/>
                <Route path="/productos" exact Component={Productoslist}/>
            </Routes>
        </section>
    )
}