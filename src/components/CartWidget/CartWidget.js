import './CartWidget.css';
import React from 'react';
import { Link } from "react-router-dom";
import cartImg from '../../assets/pngwing.com.png';
import { useCartContext } from '../../context/CartProvider';

export const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <div className='menu-navbar__logo'>
            <span> {totalProducts() || '' }</span>
            <Link to={"/cart"}><img className='menu-navbar__img' src={cartImg} alt='cart-widget'/></Link>
        </div>
    );
}

export default CartWidget;