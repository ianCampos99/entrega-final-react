import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ totalItems }) => {
    return (
        <Link to="/cart" className="d-flex align-items-center text-dark text-decoration-none">
            <span role="img" aria-label="Carrito de compras" className="fs-4 me-2">🛒</span>
            {totalItems > 0 && <span className="badge bg-primary rounded-pill">{totalItems}</span>} 
        </Link>
    );
};

export default CartWidget;