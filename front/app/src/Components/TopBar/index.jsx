import React, { useState, useEffect } from 'react';
import './TopBar.css';

export const TopBar = () => {
  const handleChangeBar = () => {

  }
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#articulos" className="navbar-link">
            Artículos
          </a>
        </li>
        <li className="navbar-item">
          <a href="#pedidos" className="navbar-link">
            Pedidos
          </a>
        </li>
        <li className="navbar-item">
          <a href="#clientes" className="navbar-link">
            Clientes
          </a>
        </li>
        <li className="navbar-item">
          <a href="#proveedores" className="navbar-link">
            Proveedores
          </a>
        </li>
        <li className="navbar-item">
          <a href="#cuentas" className="navbar-link">
            Cuentas
          </a>
        </li>
      </ul>
    </nav>
  );
};


