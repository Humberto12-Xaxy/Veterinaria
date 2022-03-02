import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import '../assets/css/nuevoDuenio.css'
export default function Register(){
    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [edad,setEdad] = useState('')
    const [usuario,setUsuario] = useState('')
    const [contrasenia,setContrasenia] = useState('')



    return(
        <div>
            <div className='registroUsuario'>
                <h2 className='titulo'>Nuevo Usuario</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombre_id">Nombre</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="apellido_id">Apellido</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="edad_id">Edad</span>
                        <input type="number" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="usuario_id">usuario</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="contrasenia_id">Contraseña</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"/>
                    </div>
                    
                   
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tipo de usuario</option>
                        <option value="1">Cliente</option>
                        <option value="2">Trabajador</option>
                     
                    </select>
                    <br />
                    <button id= 'boton' type="button" class="btn btn-outline-success">Registrar</button>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
