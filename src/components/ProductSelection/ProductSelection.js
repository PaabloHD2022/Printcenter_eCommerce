import "./ProductSelection.css"
import React from 'react';
import { NavLink } from "react-router-dom";

const ProductSelection = () => {
    return (
        <div className="nav_Products">
            <h3 className="title_products">Algunos de nuestros productos</h3>
            <h2 className="title_products2">"Para otro tipo de proyectos póngase en contacto con nosotros"</h2>
            <div className="items_List">
                <ul className="lista_categorias">
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/"}>Todos los Productos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Libros"}>Libros</NavLink>
                    </li> 
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Agendas"}>Agendas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Calendarios"}>Calendarios</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Bolsas"}>Bolsas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Gigantografias"}>Gigantografías</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Cajas"}>Cajas</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Cartelería"}>Cartelería</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Catálogos"}>Catálogos</NavLink>
                    </li>
                    <li className="categorias">
                        <NavLink className={({isActive}) => isActive ? 'active' : 'inactive'} to={"/category/Cuadernos"}>Cuadernos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductSelection