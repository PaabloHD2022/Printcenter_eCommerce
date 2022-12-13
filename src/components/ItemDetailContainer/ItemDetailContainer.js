import React, {useState, useEffect} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState();
    const { id } = useParams();

    const getProduct = () =>{
        const db = getFirestore();
        const query = doc(db, 'items', id);
        getDoc(query)

        .then((response) => {
            setSelectedProduct({ id: response.id, ...response.data() });
        })
        .catch((error) => console.log(error));
    };

    useEffect(() =>{
        getProduct();
    }, [id]);

    return (
        <div>
        { selectedProduct && <ItemDetails selectedProduct={selectedProduct} />}
        </div>
    );
};

export default ItemDetailContainer;