import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bd from '../../services/services.js';
import { ArticleForm } from './ArticleForm.jsx';

export const Articulos = () => {
    const URL = 'http://localhost:8002/api/v1';
    const [articulos, setArticulos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [refresh, onRefresh] = useState();
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
  
    const handleAgregarArticulo = (articulo) => {
        console.log(articulo)
        bd.aInsertArticle(articulo).then((res) => {
            console.log("SE HA INSERTADO CORRECTAMENTE", res)
            setArticulos([...articulos, articulo])
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

    const toggleMostrarFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
      };

    const comprobeViewForm = () => { 
      if (mostrarFormulario) {
        return(<ArticleForm onAddArticle={handleAgregarArticulo} title="articulo" onViewForm={setMostrarFormulario}/>)
      }
    };
  
    return (
      <>
        <h1 className="app-heading">Listado de Artículos</h1>
        <button className="app-toggle-form-btn" onClick={toggleMostrarFormulario}>
        Añadir Artículo
        </button>
        {comprobeViewForm()}
      <table className="app-table">
        <thead>
          <tr className="app-table-header">
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map((articulo) => (
            <tr key={articulo.id} className="app-table-row">
              <td className="app-table-cell">{articulo.nombre}</td>
              <td className="app-table-cell">{articulo.descripcion}</td>
              <td className="app-table-cell">{articulo.precio}</td>
              <td className="app-table-cell">{articulo.stock}</td>
              <td className="app-table-cell">
                <button className="app-table-cell-delete-btn" onClick={() => handleEliminarArticulo(articulo.id)}>
                  Eliminar
                </button>
                <button className="app-table-cell-edit-btn" onClick={() => handleEditarArticulo(articulo)}>
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
}
