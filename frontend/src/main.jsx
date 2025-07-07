import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

// Nossas páginas
import HomePage from './HomePage.jsx';
import AuthPage from './AuthPage.jsx';

// Definição do nosso mapa de rotas
const router = createBrowserRouter([
  {
    path: "/", // Quando a URL for a raiz do site...
    element: <HomePage />, // ...mostre o componente HomePage.
  },
  {
    path: "/login", // Quando a URL for /login...
    element: <AuthPage />, // ...mostre o componente AuthPage.
  },
]);

// Renderiza o aplicativo usando o provedor de rotas
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);