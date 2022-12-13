import React from "react";
import { useCartContext } from '../../context/CartProvider';
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (

        <div className="item_cart">
            <img src={`/images/games/${product.img}`} alt={product.name}/>
        <div className="card-body">
            <h2 className="card-title">Título: {product.name}</h2>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio por unidad: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <p>Cantidad: {product.quantity}</p>
            <div className="card-actions justify-end">
                <button onClick={() => removeProduct(product.id)} className="btn btn-primary">Eliminar</button>
            </div>
        </div>
        </div>
    )
}

export  default ItemCart;