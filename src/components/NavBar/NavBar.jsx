// src/components/Navbar/NavBar.jsx
import React from 'react';
import CartWidget from '../CartWidget/CartWidget' ; 
import './NavBar.css'; // Importa los estilos CSS para NavBar

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <h1 className="navbar-brand">Mi Tienda</h1>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#">Inicio</a></li>
                    <li className="navbar-item"><a href="#">Productos</a></li>
                    <li className="navbar-item"><a href="#">Ofertas</a></li>
                    <li className="navbar-item"><a href="#">Contacto</a></li>
                </ul>
                <CartWidget /> {/* Añade el CartWidget aquí */}
            </nav>
        </header>
    );
}

export default NavBar;
