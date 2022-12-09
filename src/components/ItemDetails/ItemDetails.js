import './ItemDetails.css'
import { useState } from "react";
import { useCartContext } from '../../context/CartProvider';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetails = ({selectedProduct}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(selectedProduct, quantity);
    }

    return (
    <div>
        <img alt="Imagenes de productos" src={selectedProduct.img} />
        <div>    
            <div>
                <h2>{selectedProduct.name}</h2>
                    <p>{selectedProduct.description}</p>
                    <p>Precio: ${selectedProduct.price}</p>
                <div>
                    {
                        goToCart? 
                        <div className='buttomsFlex'>

                        <div><Link to='/cart' className='btn mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Ver mi carrito</Link></div>
                        <div><Link to='/' className='btn mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>Seguir comprando</Link></div>
                        
                        </div>

                        : <ItemCount initial={1} stock={selectedProduct.stock} onAdd={onAdd}/>
                    }
                </div>
            </div>
        </div>
    </div>
    );
}

export default ItemDetails;