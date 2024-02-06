import React from 'react'
import Portada from "../images/Portada.jpg"
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div>
        <Link to="/">
          <h1 className='title'>Inicio</h1>
        </Link>
        <Link to="/Productos">
          <h1 className='title'>Productos</h1>
        </Link>
        <img src={Portada} alt="inicio"></img>
    </div>
  )
}
