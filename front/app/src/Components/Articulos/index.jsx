import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bd from '../../services/services.js'

export const Articulos = () => {
    const URL = 'http://localhost:8002/api/v1';
    const [articulos, setArticulos] = useState([]);
    const [nuevoArticulo, setNuevoArticulo] = useState({
      nombre: '',
      descripcion: '',
      precio: '',
      stock: ''
    });
  
    useEffect(() => {
      obtenerArticulos();
    }, []);
  
    const obtenerArticulos = () => {
      axios
        .get('http://localhost:8002/api/v1/articulos')
        .then((response) => {
          setArticulos(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNuevoArticulo({ ...nuevoArticulo, [name]: value });
    };
  
    const handleAgregarArticulo = () => {
        console.log(nuevoArticulo)
        bd.aInsertArticle(nuevoArticulo).then((res) => {
            console.log("SE HA INSERTADO CORRECTAMENTE", res)
        })
    };
  
    const handleEliminarArticulo = (id) => {
        bd.delArticleByCod(id).then((res) => {
            console.log("SE HA ELIMINADO CORRECTAMENTE", res)
            setArticulos(articulos.filter((articulo) => articulo.id !== id));
        }).catch((error) => {
            console.error(error);
          });
    };
    const handleEditarArticulo = (id) => {
        bd.delArticleByCod(id).then((res) => {
            console.log("SE HA ELIMINADO CORRECTAMENTE", res)
            setArticulos(articulos.filter((articulo) => articulo.id !== id));
        }).catch((error) => {
            console.error(error);
          });
    };
  
    return (
      <div>
        <h1 className="app-heading">Listado de Artículos</h1>
      <ul className="app-list">
          {articulos.map((articulo) => (
            <li key={articulo.id}>
              <h2 className="app-item-title">{articulo.nombre}</h2>
                <p className="app-item-description">{articulo.descripcion}</p>
                <p className="app-item-price">Precio: {articulo.precio}</p>
                <p className="app-item-stock">Stock: {articulo.stock}</p>
                <button className="app-item-delete-btn" onClick={() => handleEliminarArticulo(articulo.id)}>Eliminar</button>
                <button onClick={() => handleEditarArticulo(articulo)}>Editar</button>
            </li>
          ))}
        </ul>
  
        <h2 className="app-form-heading">Añadir Artículo</h2>
      <form className="app-form">
        <label className="app-form-label">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nuevoArticulo.nombre}
            onChange={handleInputChange}
            className="app-form-input"
          />
        </label>
        <label className="app-form-label">
          Descripción:
          <textarea
            name="descripcion"
            value={nuevoArticulo.descripcion}
            onChange={handleInputChange}
            className="app-form-input"
          />
        </label>
        <label className="app-form-label">
          Precio:
          <input
            type="text"
            name="precio"
            value={nuevoArticulo.precio}
            onChange={handleInputChange}
            className="app-form-input"
          />
        </label>
        <label className="app-form-label">
          Stock:
          <input
            type="text"
            name="stock"
            value={nuevoArticulo.stock}
            onChange={handleInputChange}
            className="app-form-input"
          />
        </label>
        <button type="button" onClick={handleAgregarArticulo} className="app-form-submit-btn">
          Agregar
        </button>
        </form>
      </div>
    );
}
