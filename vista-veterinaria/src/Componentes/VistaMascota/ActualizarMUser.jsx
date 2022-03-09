import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../assets/css/nuevaMascota.css'


export default function ActualizarMUser(){
    const [nombre,setNombre] = useState('')
    const [raza,setApellido] = useState('')
    const [fecha,setEdad] = useState('')
    const [razon,setUsuario] = useState('')

    return(
        <div>
            <div className='updateMascota'>
                <h2 className='titulo'>Actualizar mascota</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombreMu">Nombre de la mascota</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="razaU">Raza de la mascota</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="fechaU">Fecha de ingreso</span>
                        <input type="date" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="razonU">Razon de ingreso</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <button id= 'boton' type="button" class="btn btn-outline-success">Actualizar mascota</button>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
