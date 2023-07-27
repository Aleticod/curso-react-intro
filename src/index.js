import React from 'react'; // Importa desde la libreria (modules)
import ReactDOM from 'react-dom/client'; // Importamos React DOM desde la libreria (modules)
import './index.css'; // Importamos la hoja de estilos desde la ruta actual
import App from './App'; // Importamos el componente App desde App.js

// Creamos una variable el cual hace referencia a la ID root en nuestro index.html
// es aqui donde inyectaremos componente de react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // Inyectamos el componente App dentro de la etiqueta que tiene como ID root
