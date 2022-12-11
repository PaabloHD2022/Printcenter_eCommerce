import './Cart.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartProvider';
import ItemCart from '../ItemCart/ItemCart';
import moment from 'moment';
import swal from 'sweetalert2'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const [total, setTotal] = useState(0);
    const [formValues, setFomrValues] = useState({
            name: '',
            email: '',
            phone: ''
        });
        /* items: cart.map(items => ({ id: items.id, name: items.nombre, price: items.precio, quantity: items.cantidad })),
        total: totalPrice(), */
    

    const getTotalPrice = () => {
        setTotal(
          cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
        );
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'Order');
        const newOrder = {
            buyer: {
            name: formValues.name,
            phone: formValues.phone,
            email: formValues.email,
        },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        };   

    const handleClick = () => {
        const db = getFirestore();
        const query = collection(db, 'order');
        addDoc(query, newOrder)
            .then(({ id }) => console.log(id))
        swal.fire({
            title: '¡Usted a emitido una orden de Compra!'
        });
        
    }

    if (cart.length === 0) {
        return (
            <div>
                <p>No hay elementos en el carrito.</p>
                <Link to='/' >Hacer compras</Link>
            </div>
        );
    }

    useEffect(() =>{
        getTotalPrice();
    },[Cart])

        return (
            <>
            <div>
                <div className='cartItems'>
                {cart.map(product => <ItemCart key={product.id} product={product} />)}            
                </div>
                <div>
                <p>TOTAL: ${totalPrice()}</p>
                <button onClick={handleClick}>Emitir Compra</button>            
                </div>
            </div>
            <div>
                <button onClick={createOrder}>Crear Orden</button>
            </div>
            </>
        )
    }
}
export default Cart;