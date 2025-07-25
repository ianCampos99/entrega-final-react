import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tienda Fluxx</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/category/electronics">Electrónica</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/jewelery">Joyería</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/hombres">Ropa Hombres</Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/mujeres">Ropa Mujeres</Link>
            </li>
        </ul>
            <CartWidget totalItems={totalQuantity} />
        </div>
    </div>
</nav>
    );
};

export default Navbar;