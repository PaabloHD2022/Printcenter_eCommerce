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
        console.log(onAdd);
    }

    return (
    <div className='Card_Item_Selected'>
        <img alt="Imagenes de productos" src={selectedProduct.img} />
        <div>    
            <div>
                <h2>{selectedProduct.nombre}</h2>
                    <p>{selectedProduct.descripcion}</p>
                    <p>Precio: ${selectedProduct.precio}</p>
                <div>
                    {
                        goToCart? 
                        <div>
                            <div>
                                <Link to='/cart' >Ver mi carrito</Link>
                            </div>
                            <div>
                                <Link to='/' >Seguir comprando</Link>
                            </div>
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