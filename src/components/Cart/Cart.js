import React from 'react'
import { useContext, useState, useEffect, } from 'react';
import { useCartContext } from '../../context/CartProvider';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import moment from 'moment';


const Cart = () => {
    
    const { cart } = useCartContext()
    const [total, setTotal] = useState(0);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: '',
    })
    
    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc, product) => acc + product.precio * product.cantidad, 0)
        );
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'order');
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

        addDoc(query, newOrder)
            .then((response) => {
            alert(`Orden creada con el id ${response.id}`);
            return response;
        })

            .then((res) =>{
            cart.forEach ((product) => {
                const query = doc (db, 'items', product.id);
                updateDoc(query, {
                    stock: product.stock - product.cantidad
                    });
                });
            })
            .catch((error) => console.log(error));
        };

        useEffect(() => {
            getTotalPrice();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[cart]);

        const handleInputChange = (event) =>{

            console.log(event.target.name);
            console.log(event.target.value);
            setFormValues({...formValues,
            [event.target.name]: event.target.value,
            });
        };
        
        return (
            <div>
                {cart.map((product) => (
                <div key={product.id}>
                    <img alt={product.nombre} src={`/Items/${product.img}`}/>
                    <p>{product.nombre}</p>
                    <p>{product.precio}</p>
                    <p>{product.descripcion}</p>
                    <p>{product.cantidad}</p>
                </div>
                ))}
                <div>
                    <h2>Total: {total} </h2>
                    <button onClick={createOrder}>Crear orden</button>
                    <div>
                        <h2>Formulario</h2>
                        <input name="name" type="text" placeholder="Nombre"  onChange={handleInputChange} />
                        <input name="phone" type="text" placeholder="Telefono"  onChange={handleInputChange} />
                        <input name="email" type="text" placeholder="Email"  onChange={handleInputChange} />
                    </div>
                </div>
            </div>
        );
    }

export default Cart;