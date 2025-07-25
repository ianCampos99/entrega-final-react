import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList.jsx';
import { getProducts, getProductsByCategory } from '../firebase/db';

const categoryNamesMap = {
    'jewelery': 'Joyería',
    'electronics': 'Electrónica',
    'ropa de hombres': 'Ropa de Hombres', 
    'ropa de mujeres': 'Ropa de Mujeres', 
};

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                let fetchedProducts = [];
                if (categoryId) {
                    fetchedProducts = await getProductsByCategory(categoryId);
                } else {
                    fetchedProducts = await getProducts();
                }
                setProducts(fetchedProducts);
            } catch (err) {
                setError(err);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    const displayTitle = categoryId
        ? categoryNamesMap[categoryId] || `${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`
        : greeting;

    if (loading) {
        return <p className="text-center mt-5">Cargando productos de la tienda</p>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">{displayTitle}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;