import React, { useState, useEffect } from 'react';
import { fetchGet, fetchPost } from "../../logic/ApiHelper";

function CreateProductView() {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(1);
    const [productData, setProductData] = useState({
        title: 'Nombre de Producto',
        price: 10,
        description: 'Descripción',
        categoryId: 1,
        images: ['https://www.karate.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent-dashboard.517a50fb.png&w=640&q=75'],
    });

    useEffect(() => {
        fetchGet("https://api.escuelajs.co/api/v1/categories")
            .then((response) => {
                setCategories(response);
                setSelectedCategoryId(response[0]?.id || '');
            }).catch(error => {
                console.error('Error al obtener las categorías:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategoryId(event.target.value);
        handleInputChange(event);
        console.log(event.target.value)
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData(prevData => ({
            ...prevData,
            [name]: value,
        }));
        console.log(productData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetchPost('https://api.escuelajs.co/api/v1/products/', productData)
            .then(response => {
                console.log('Producto creado:', response);
                // Limpiar el formulario después de la creación exitosa del producto
                setProductData({
                    title: 'Nombre de Producto',
                    price: 10,
                    description: 'Descripción',
                    categoryId: 0,
                    images: ['https://placeimg.com/640/480/any'],
                });
            })
            .catch(error => {
                console.error('Error al crear el producto:', error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Crear Producto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Título</label>
                    <input
                        type="text"
                        name="title"
                        value={productData.title}
                        onChange={handleInputChange}
                        className="w-full border rounded py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Precio</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        className="w-full border rounded py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Descripción</label>
                    <textarea
                        name="description"
                        value={productData.description}
                        onChange={handleInputChange}
                        className="w-full border rounded py-2 px-3"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Categoría</label>
                    <select
                        name="categoryId"
                        value={selectedCategoryId}
                        onChange={handleCategoryChange}
                        className="w-full border rounded py-2 px-3"
                        required
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Crear Producto
                </button>
            </form>
        </div>
    );
}

export default CreateProductView;