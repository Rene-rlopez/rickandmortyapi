import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Characters() {
  const [personajes, setPersonajes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [estadoFiltro, setEstadoFiltro] = useState('');

  const obtenerPersonajes = async (pageNumber) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
      const data = response.data;
      setPersonajes(data.results);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPersonajes(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [estadoFiltro]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const personajesFiltrados = personajes.filter((personaje) =>
    estadoFiltro ? personaje.status === estadoFiltro : true
  );

  const getBorderColor = (status) => {
    switch (status) {
      case "Dead":
        return "red";
      case "Alive":
        return "green";
      default:
        return "blue";
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"><br /><br />
          <select className="form-select mb-3" value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}>
            <option value="">Mostrar todos</option>
            <option value="Alive">Vivo</option>
            <option value="Dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {personajesFiltrados.map((item, index) => (
          <div className="col" key={index}>
            <div className='card' style={{ border: `3px solid ${getBorderColor(item.status)}` }}>
            <div class="card-header">
                <h5 className="card-title">{item.name}</h5>
            </div>
              <img src={item.image} alt="" className="img-fluid" />
              <div className="card-body">
                <ul>
                  <li>
                    <strong>Gender: </strong>{item.gender}
                  </li>
                  <li>
                    <strong>Species: </strong>{item.species}
                  </li>
                  <li>
                    <strong>Location: </strong>{item.origin.name}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div><br />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrevPage}>Previous </button>
          </li>
          <li className="page-item">
            <span className="page-link">{currentPage}</span>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
