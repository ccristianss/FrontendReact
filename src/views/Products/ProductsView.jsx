import React from "react";
import { useState, useEffect } from "react";
import CardProduct from "../../components/Cards/CardProducts";
import { NavLink } from "react-router-dom";

function ProductsView() {

    const [Products, setProducts] = useState(null);

    useEffect(() => {
        //fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=8")
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(res => res.json())
            .then(resProducts => setProducts(resProducts));
    }, [])
    console.log(Products)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Mis Productos
            </h1>
            <div className='grid gap-1 grid-cols-4 w-full max-w-screen-xl my-4'>

                {Products?.map(itemProduct => (
                    <CardProduct key={itemProduct.id}
                        id={itemProduct.id}
                        title={itemProduct.title}
                        price={itemProduct.price}
                        description={itemProduct.description}
                        category={itemProduct.category.name}
                        image={itemProduct.images[0]} />
                ))}
            </div>
            <NavLink
                to='/CreateProduct'>
                <button className="fixed bottom-24 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg"
                    title="Crear Producto">
                    +
                </button>
            </NavLink>
        </div>
    );

}

export default ProductsView;