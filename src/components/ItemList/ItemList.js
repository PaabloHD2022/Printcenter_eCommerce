import './ItemList.css'
import React from 'react';
import Item from "../Item/Item";
import ProductSelection from '../ProductSelection/ProductSelection';


const ItemList = ({data = []}) => {
    return (
        data.map(film => <Item key={film.id} info={film} />)
    )
}

export default ItemList;