import React, {useState, useEffect} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetails from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'selectedProduct', id);
        getDoc(queryDoc)
            .then(res => setSelectedProduct({ id: res.id, ...res.selectedProduct() }))
    }, [id]);

    return  (
        <div className='selected_product'>
            {selectedProduct && <ItemDetails selectedProduct={selectedProduct} />}
        </div>
    )
}

export default ItemDetailContainer;