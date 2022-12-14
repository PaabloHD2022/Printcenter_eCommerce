import React from "react";
import { useCartContext } from '../../context/CartProvider';
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (

        <div className="item_cart">
            <img src={product.img} alt={product.name}/>
            <div className="card_body">
                <h2 className="card_title">Producto: {product.nombre}</h2>
                <p className="descripcion">Detalle: {product.descripcion}</p>
                <p className="cantidad">Cantidad: {product.cantidad}</p>
                <p>Precio por unidad: $ {product.precio}</p>
                <p className="sub_total">Subtotal: $ {product.cantidad * product.precio}</p>
                    <div>
                        <button className="button_delete" onClick={() => removeProduct(product.id)}>Eliminar</button>
                    </div>
            </div>
        </div>
    )
}

export default ItemCart;