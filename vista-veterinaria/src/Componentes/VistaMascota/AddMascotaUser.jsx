import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../assets/css/nuevaMascota.css'
import ActualizarMUser from './ActualizarMUser';
export default function RegisterM(){
    const [nombre,setNombre] = useState('')
    const [raza,setApellido] = useState('')
    const [fecha,setEdad] = useState('')
    const [razon,setUsuario] = useState('')


    return(
        <div>
            <div className='registroMascota'>
                <h2 className='titulo'>Registrar nueva mascota</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombreM">Nombre de la mascota</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="raza">Raza de la mascota</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="fecha">Fecha de ingreso</span>
                        <input type="date" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="razon">Razon de ingreso</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <button id= 'boton' type="button" class="btn btn-outline-success">Registrar mascota</button>
                    </ul>
                    
                </div>
            </div>
        {/* <ActualizarMUser/> */}
        </div>
         
        

    )
}