import './Item.css'
import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
    
        <div className="card_item">      
            <div className='info_producto'>
                <h2>{product.nombre}</h2>
            <div className='cant_precio'>
                <p className='p_minima'>Prod. Mínima: {product.produccion_minima}</p>
            </div>          
            <Link to={`/item/${product.id}`}>
                <div className='img_producto'>
            <img alt="Imagenes de productos" src={product.img} />
                </div>
            </Link>          
            <div>        
                <p className='precio'>Precio: ${product.precio}</p>
            </div>
            <div>
                <p className='stock'>Stock: {product.stock}</p>
            </div>
            </div>      
        </div>
    )
};

export default Item;