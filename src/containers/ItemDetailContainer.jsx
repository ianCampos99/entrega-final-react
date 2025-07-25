import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/db';
import ItemDetail from '../components/ItemDetail.jsx';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        if (itemId) { 
            setLoading(true);
            getProductById(itemId)
                .then(data => {
                    setProduct(data);
                })
                .catch(error => {
                    setProduct(null);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setProduct(null);
        }
    }, [itemId]);

    if (loading) {
        return <p className="text-center mt-5">Cargando producto</p>;
    }

    if (!product) {
        return <p className="text-center mt-5">Error en la busqueda de productos</p>;
    }

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;