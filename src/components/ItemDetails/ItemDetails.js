import './ItemDetails.css'
import { useState } from "react";
import { useCartContext } from '../../context/CartProvider';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetails = ({selectedProduct}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()

    const onAdd = (cantidad) => {
        setGoToCart(true);
        addProduct(selectedProduct, cantidad);
        console.log(onAdd);
    }

    return (
    <div className='Card_Item_Selected'>
        <img className="img_Item_Selected" alt="Imagenes de productos" src={selectedProduct.img} />
        <div>    
            <div className='card_Item_info'>
                <h3>{selectedProduct.nombre}</h3>
                    <p className='card_descripcion'>{selectedProduct.descripcion}</p>
                    <p className='card_Item_Precio'>Precio: ${selectedProduct.precio}</p>
                <div>
                    {
                        goToCart? 
                        <div>
                            <div>
                                <Link to='/cart'>Ver mi carrito</Link>
                            </div>
                            <div>
                                <Link to='/'>Seguir comprando</Link>
                            </div>
                        </div>

                        : <ItemCount stock={selectedProduct.stock} onAdd={onAdd}initial={1}/>
                    }
                </div>
            </div>
        </div>
    </div>
    );
}

export default ItemDetails;