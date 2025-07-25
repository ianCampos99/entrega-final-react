import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, description, image, category }) => {

    return (
        <div className="card h-100 mb-4">
            <img src={image} alt={name} className="card-img-top img-fluid" style={{ maxHeight: '200px', objectFit: 'contain' }} />
            <div className="card-body d-flex flex-column justify-content-center vertical">
                <h5 className="card-title">{name}</h5>
                <p className="card-text category">Categoría: {category}</p>
                <p className="card-text price">${price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/item/${id}`} className="btn btn-success w-100">Ver Detalle</Link>
            </div>
        </div>
    );
}

export default Item;