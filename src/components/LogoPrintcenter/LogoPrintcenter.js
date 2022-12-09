import React from 'react';
import LogoNavBar from '../../assets/Logo Printcenter - letras blancas.png'
import './LogoPrintcenter.css'

const LogoPrintcenter = () => {
    return (
        <div className='logo-navbar__printcenter'>
            <img className='logo-menu__printcenter' src={LogoNavBar} alt='Logo Printcenter'/>
        </div>
    )
}

export default LogoPrintcenter