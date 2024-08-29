// src/components/CartWidget/CartWidget.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de que esta importación es correcta
import './CartWidget.css'; // Importa los estilos CSS

const CartWidget = () => {
    const itemsCount = 5; // Número hardcodeado para la notificación

    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            {itemsCount > 0 && (
                <span className="cart-notification">{itemsCount}</span>
            )}
        </div>
    );
}

export default CartWidget;
