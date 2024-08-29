// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar/NavBar'; // Asegúrate de que la ruta sea correcta
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <div>
            <NavBar /> {/* Usa el componente NavBar */}
            <main>
                <ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />
                {/* Otros componentes o contenido */}
            </main>
        </div>
    );
}

export default App;

