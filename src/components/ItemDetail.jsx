import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Counter from '../components/Counter.jsx';
import { CartContext } from '../context/CartContext.jsx';
import { getProductById } from '../firebase/db.js'; 
import Swal from 'sweetalert2';

const ItemDetail = () => {
    const { addItem } = useContext(CartContext);
    const navigate = useNavigate();
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

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
        }
    }, [itemId]);

    const handleAddCart = () => {
        if (product) {
            addItem(product, quantity);
            
            Swal.fire({
                icon: 'success',
                title: '¡Producto agregado!',
                text: `${quantity} ${product.name}(s) añadido(s) al carrito.`,
                showConfirmButton: false, 
                timer: 1500, 
                timerProgressBar: true,
                toast: true, 
                position: 'top-end' 
            });

        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    if (loading) {
        return <p className="text-center mt-5">Cargando producto</p>;
    }

    if (!product) {
        return <p className="text-center mt-5">Producto no encontrado</p>;
    }

    return (
        <div className="card col-md-5 mx-auto mt-4 p-4 d-flex flex-column align-items-center">
            <img
                src={product.image}
                style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain' }}
                alt={product.name}
            />
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <p>Precio: ${product.price ? product.price.toFixed(2) : 'N/A'}</p>

            <Counter initial={1} onCountChange={setQuantity} />

            <button className="btn btn-primary mt-3" onClick={handleAddCart}>
                Agregar al Carrito ({quantity})
            </button>

            <button className="btn btn-secondary mt-3" onClick={handleGoBack}>Atrás</button>
        </div>
    );
};

export default ItemDetail;