import React, { useState } from 'react';
import axios from 'axios';

export default function Search() {
    const [personaje, setPersonaje] = useState([]);

    const [nombre, setNombre] = useState("");

    const getPersonajeByNombre = () => {
        axios.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`).then((response) => {
            setPersonaje(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }



    const handleName = (e) => {
        console.log(e.target.value);
        setNombre(e.target.value);
    }

    const buscarPersonaje = () => {
        getPersonajeByNombre();
    }

    function handleKeyDown(p) {
        if(p.key === "Enter") {
            buscarPersonaje();
        }
    }

    console.log(personaje);

    return (
        <div className='mt-5'>
			<div className='container'>
                <div className="text-white p-5 mb-2 bg-color1 rounded-4">
                    <h1>Busqueda de personajes</h1>

                    <label className="m-4" htmlFor="">Ingresa el nombre del personaje:</label>
                    <div className="container-fluid">
                        <div className="input-group">
                        <span className="input-group-text" id="basic-addon1" onClick={buscarPersonaje}><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" className="form-control col-md-6" placeholder="Personaje" aria-label="Personaje" aria-describedby="basic-addon1" onChange={handleName} onKeyDown={handleKeyDown}/>
                        <select className="form-select col-md-4">
                            <option value="">Todo</option>
                            <option value="1">Vivo</option>
                            <option value="2">Muerto</option>
                            <option value="3">Desconocido</option>
                        </select>
                        </div>
                    </div>
                </div>
                <br />

                {
                    personaje.length !==0 ? (


                    personaje.map((personaje, indice) => {
                        return (
                            <div className='p-4 bg-color4 m-5 rounded'>
                                
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <img src={personaje.image} className='img-fluid rounded' alt="avatar" />
                                    </div> 
                                    <div className='col-md-8 px-5'>
                                        <h2 className='text-center mb-4'>Información del personaje #{personaje.id}</h2>
                                        <p className='text-start'><strong>Identidad:</strong> <spam className='fs-3 fw-bold'>{personaje.name}</spam></p>
                                        <p className='text-start'><strong>Estado: </strong>{personaje.status}</p>
                                        <p className='text-start'><strong>Especie: </strong>{personaje.species}</p>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    ) : (
                        <div className="alert alert-warning" role="alert">
                            <i className="fa-solid fa-circle-exclamation"></i> No se encontraron coincidencias, escribe un nombre valido.   
                        </div>
                    ) 
                }


            </div>
        </div>
    );
}