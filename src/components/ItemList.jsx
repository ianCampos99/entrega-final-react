import React from 'react';
import Item from '../components/Item';

const ItemList = ({ products }) => {
    console.log("DEBUG: ItemList - Products recibidos:", products);

    if (!Array.isArray(products)) {
        return <p className="alert alert-danger">Error: No se pudieron mostrar los productos.</p>;
    }

    if (products.length === 0) {
        return <p className="alert alert-info">No hay productos para mostrar en esta lista.</p>;
    }

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(product => (
                <div key={product.id} className="col-md-4 mb-4">
                    <Item {...product} /> 
                </div>
            ))}
        </div>
    );
};

export default ItemList;