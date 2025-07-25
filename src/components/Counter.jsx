import React, { useState, useEffect } from 'react';

const Counter = ({ initial, onCountChange }) => {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        if (onCountChange) {
            onCountChange(count);
        }
    }, [count, onCountChange]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1); 
        }
    };

    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-outline-secondary" onClick={decrement}>-</button>
            <span className="mx-2">{count}</span>
            <button className="btn btn-outline-secondary" onClick={increment}>+</button>
        </div>
    );
};

export default Counter;