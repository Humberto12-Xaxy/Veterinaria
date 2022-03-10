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
    const [rol,setRol] = useState('')

const handleRegister = () => {
    let usuario_JSON = {
        nombre : nombre,
        apellidos : apellido,
        edad : edad,
        username : usuario,
        password : contrasenia,
        rol : rol

    }
    axios.post('http://localhost:18080/registerUser',usuario_JSON)

}


    return(
        <div>
            <div className='registroUsuario'>
                <h2 className='titulo'>Nuevo Usuario</h2>
                <br />
                <div className="inputs" class="input-group mb-3">
                    <ul>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="nombre_id">Nombre</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1" onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="apellido_id">Apellido</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"  onChange={e => setApellido(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="edad_id">Edad</span>
                        <input type="number" class="form-control"  aria-describedby="basic-addon1"  onChange={e => setEdad(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="usuario_id">usuario</span>
                        <input type="text" class="form-control" aria-describedby="basic-addon1"  onChange={e => setUsuario(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="contrasenia_id">Contraseña</span>
                        <input type="text" class="form-control"  aria-describedby="basic-addon1"  onChange={e => setContrasenia(e.target.value)}/>
                    </div>
                    
                   
                    <select class="form-select" aria-label="Default select example" onChange={e => setRol(e.target.value)}>
                        <option selected>Tipo de usuario</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Trabajador">Trabajador</option>
        
                    </select>
                    <br />
                    <button id= 'boton' type="button" class="btn btn-outline-success" onClick={() => {handleRegister()}}>Registrar</button>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
