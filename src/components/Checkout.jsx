import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido.';
        if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido.';
        if (!/^\d{7,}$/.test(formData.phone.trim())) newErrors.phone = 'Por favor, ingresa un número de teléfono válido.';
        if (!formData.email.trim()) newErrors.email = 'El email es requerido.';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        if (cart.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Carrito Vacío',
                text: 'No puedes finalizar la compra con un carrito vacío. Agrega productos primero.',
            });
            return;
        }

        setLoading(true);
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        const order = {
            buyer: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
            },
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total: totalPrice,
            date: serverTimestamp(),
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            const generatedOrderId = docRef.id;
            setOrderId(generatedOrderId);
            clearCart();

            Swal.fire({
                icon: 'success',
                title: '¡Compra exitosa!',
                html: `Tu orden ha sido generada con el ID:<br><strong>${generatedOrderId}</strong><br>Pronto nos pondremos en contacto contigo.`,
                confirmButtonText: 'Volver al inicio'
            }).then(() => {
                navigate('/');
            });

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error en la compra',
                text: 'Hubo un error al procesar tu compra. Por favor, inténtalo de nuevo.',
            });
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0 && !orderId && !loading) {
        return (
            <div className="text-center mt-5">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos de la Tienda fluxx</p>
                <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
                    Ir a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Finalizar Compra</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {loading ? (
                        <div className="text-center mt-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                            <p>Procesando tu compra...</p>
                        </div>
                    ):(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre Completo</label> <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Teléfono Celular</label>
        <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
                <button type="submit" className="btn btn-success w-100" disabled={loading}>
                Confirmar Compra
                </button>
        </form>
        )}
        </div>
    </div>
</div>
);
};

export default Checkout;