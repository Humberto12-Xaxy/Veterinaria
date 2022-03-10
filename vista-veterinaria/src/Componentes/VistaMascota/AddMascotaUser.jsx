import React from 'react'
import axios, { Axios } from 'axios';
import { useState } from 'react';
import '../assets/css/nuevaMascota.css'
import ActualizarMUser from './ActualizarMUser';
export default function RegisterM(){
    const [nombre,setNombre] = useState('')
    const [raza,setRaza] = useState('')
    const [fecha,setFecha] = useState('')
    const [razon,setRazon] = useState('')

    
    const handleRegister=()=>{
        const dato = {
            nombre:nombre,
            raza:raza,
            fechaIngreso:fecha,
            razon:razon,
        };
        axios.post('http://localhost:9998/mascota/add', dato);
    }
    return(
        <div>
            <div className='registroMascota'>
                <h2 className='titulo'>Registrar nueva mascota</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombreM">Nombre de la mascota</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1" onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="raza">Raza de la mascota</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" onChange={e => setRaza(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="fecha">Fecha de ingreso</span>
                        <input type="date" class="form-control"  aria-describedby="basic-addon1" onChange={e => setFecha(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="razon">Razon de ingreso</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1" onChange={e => setRazon(e.target.value)}/>
                    </div>
                    <button id= 'boton' type="button" class="btn btn-outline-success" onClick={()=>{ 
                        console.log(fecha)
                        handleRegister()
                    }}>Registrar mascota</button>
                    </ul>
                    
                </div>
            </div>
        {/* <ActualizarMUser/> */}
        </div>
         
        

    )
}