import React, { useState, useEffect } from 'react';

export const ArticleForm = ({onAddArticle, title, onViewForm}) => {
    const [nuevoArticulo, setNuevoArticulo] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
      });
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevoArticulo({ ...nuevoArticulo, [name]: value });
      };

      const handleAgregarArticulo = () => {
        //Añadimos articulo y ocultamos formulario
        onAddArticle(nuevoArticulo);
        onViewForm(false);
      }
  return (
    <div>
        <div className={`app-form-container`}>
          <h2 className="app-form-heading">Añadir {title}</h2>
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
            <button type="
            button" onClick={handleAgregarArticulo} className="app-form-submit-btn">
              Añadir
            </button>
          </form>
        </div>
    </div>
  )
}
