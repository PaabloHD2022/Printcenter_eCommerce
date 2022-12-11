import './ItemList.css'
import React from 'react';
import Item from "../Item/Item";



const ItemList = ({products}) => {
    return (
        products.map(film => <Item key={film.id} product={film} />)
    )
}

export default ItemList;