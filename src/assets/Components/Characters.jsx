import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './Page';

export default function Characteres() {
  const [characteres, setCharacteres] = useState([]);

  const obtenerCharacteres = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      console.log(response.data.results);
      setCharacteres(response.data.results);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    obtenerCharacteres();
  }, [])

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

  console.log(characteres);
  return (
    <main className='mt-5'>
      <div className='container'>
        <h1 className='text-center text-white'>Personajes De Ricky and Morty</h1>
        <div className='row'>
          {
            characteres.map((item) => {
              return (
                <div className='col-md-4 mt-4'>
                  <div className='card' style={{ border: `3px solid ${getBorderColor(item.status)}` }}>
                    <h5 className='card-header text-center border-white text-black bg-primary-subtle'>{item.name}</h5>
                    <div className='card-body'>
                      <div className='d-flex flex-row justify-content-center'>
                        <img src={`${item.image}`} alt="" className='img-fluid' />
                      </div>
                      <div className='d-flex flex-row justify-content-center'>
                        <p className='fw-bold'>Id del Personaje: {item.id}</p>
                      </div>
                      <div className='d-flex flex-row justify-content-center'>
                        <p className='fw-bold'>Estado: {item.status}</p>
                      </div>
                      <div className='d-flex flex-row justify-content-center'>
                        <a href={item.status} className='btn btn-secondary'> Ver mas detalles</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Page />
    </main>
  )
}