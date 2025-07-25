import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, removeItem, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="text-center mt-5">
                <h2>Tu carrito está vacío 🛒</h2>
                <p>Sigue viendo la pagina de Tienda Fluxx</p>
                <Link to="/" className="btn btn-primary mt-3">Ir a la tienda</Link>
            </div>
        );
    }

return (
<div className="container mt-5">
    <h2 className="mb-4 text-center">Mi Carrito de Compras</h2>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                {cart.map(item => (
        <div key={item.id} className="card mb-3 p-3 d-flex flex-row align-items-center"><img
            src={item.image}
            alt={item.name}
            style={{ width: '80px', height: '80px', objectFit: 'contain', marginRight: '15px' }}
            />
            <div className="flex-grow-1">
                <h5 className="mb-0">{item.name}</h5>
                    <p className="mb-0">Cantidad: {item.quantity}</p>
                    <p className="mb-0">Precio por unidad: ${item.price.toFixed(2)}</p>
                    <p className="fw-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                >
                    Eliminar
                </button>
        </div>
    ))}
            <div className="card p-3 mt-4">
                <p className="mb-1">Total de productos: {totalQuantity}</p>
                    <h4 className="fw-bold">Total a Pagar: ${totalPrice.toFixed(2)}</h4>
                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-outline-danger" onClick={clearCart}>
                        Vaciar Carrito
                        </button>
                <Link to="/checkout" className="btn btn-success">
                Finalizar Compra
                </Link>
                    <Link to="/" className="btn btn-outline-info">
                        Seguir Comprando
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;