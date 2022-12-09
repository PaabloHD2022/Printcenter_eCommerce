import './NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom'
import LogoPrintcenter from '../LogoPrintcenter/LogoPrintcenter'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    return (
        <div className='menu-navbar-container'>
        <LogoPrintcenter/>
            <ul className='menu-items'> 
                <li>
                    <a href='#' className='menu-list'>Home</a>
                </li>
                <li> 
                    <a href='#' className='menu-list'>Nosotros</a>
                </li>
                <li>
                    <a href='#' className='menu-list'>Servicios</a>
                </li>
                <li>
                    <Link to="/" className='menu-list'>Tienda</Link> 
                </li>
                <li>
                    <a href='#' className='menu-list'>Contacto</a>
                </li>    
            </ul>
        <CartWidget />        
        </div>  
        )
}

export default NavBar