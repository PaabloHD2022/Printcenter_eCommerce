import './ItemListContainer.css';
import React from 'react'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ProductSelection from '../ProductSelection/ProductSelection';


const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const { categoryName } = useParams(); //Trae el filtrado de los productos por categoria...
        
    const getProducts = () => {
    const db = getFirestore(); //Inicializamos la base de datos...
    const querySnapshot = collection(db, "items") // Creamos un query y lo configuramos con la funcion collection que recibe dos parametros la base de datos y el nombre de la coleecion que queremos traer en este caso "items"...
    
    if(categoryName){  // Si existe categoryName filtramos la base con queryFilter de inicializa con dos argumentos, el query original(querySnapshot)y la validacion con el where
        const queryFilter = query(
            querySnapshot, 
            where("categoria", "==", categoryName)
        )
        // Esta data se obtiene de este modo porque Firestore asi lo define...
        getDocs(queryFilter) // El metodo getDocs nos retorna una promesa entonces podemos hacer la encadenacion con el .then y el .catch
        .then((response) => {  // Le ponemos un callback y como argumente recibe la respuesta y dentro de las llaves lo que va a ejecutar...
        const data = response.docs.map((item) => { //El map recorre el arreglo y retorna un nuevo arreglo y se obtiene cada uno de los objetos con la propiedad id.
            console.log(item.data()); 
            console.log(item.id);
            return{id: item.id, ...item.data()} //Utilizamos el spread operator para obtener los datos de firebase de una forma que nos sirva para mostrar los productos en la tienda...
        });
        console.log(data);
        setItems(data) // una vez que se procesa la data proveniente de firebase se guarda en el useState "setItems"...
    })
        .catch((error) =>{ //Se coloca el .catch en caso de que se produjera algun error al traer la data de firebase asi podemos saber cual es el problema...
        console.log(error);         
        });
            
        }else{
            getDocs(querySnapshot)
            .then((response) => {
                const data = response.docs.map((item) => {
                    console.log(item.data());
                    console.log(item.id);
                    return{id: item.id, ...item.data()} //Utilizamos el spread operator ...
                });
                console.log(data);
                setItems(data)
            })
            .catch((error) =>{
                console.log(error);        
            });
        }
    };

    useEffect(() => {
        getProducts();
    }, [categoryName]);

    return (
        <div className='items_tienda'>
            <div className='selector'>
                <ProductSelection />
            </div>
            <div className="items_list">
                <ItemList products={items} />
            </div>
        </div>
    );
}

export default ItemListContainer;