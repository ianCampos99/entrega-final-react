import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer.jsx';
import Navbar from './components/NavBar.jsx';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a Tienda fluxx" />} />
                <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos por categoría" />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;