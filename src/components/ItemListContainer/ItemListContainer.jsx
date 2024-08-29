// src/components/ItemListContainer/ItemListContainer.jsx
import React from 'react';

// Componente ItemListContainer
const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    };

    const greetingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    };

    return (
        <div style={containerStyle}>
            <p style={greetingStyle}>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
