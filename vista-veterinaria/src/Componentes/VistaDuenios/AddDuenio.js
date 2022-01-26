import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function AddDuenio(props) {
    const [nombre, setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [direccion,setDireccion] = useState('');
    
    const peticionPost = (url,duenio)=>{
        axios.post(url,duenio).then(response=>{
            console.log(response)
        })
    }
    const handleSubmit = (url)=>{
        const duenio={
            nombre:nombre,
            telefono:telefono,
            direccion:direccion
        }
        peticionPost(url,duenio)
    }
    const handleclick = ()=>{
        alert('Se añadió con éxito');
        axios.get('http://localhost:18080/listDuenios').then(response=>props.onDueniosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div>
            <div className="aniadir">
                <h2>Añadir una nuevo Dueño</h2>
                <div className="inputs">
                    <input className='input-group-text texto' id='nombre' type="text" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                    <input className='input-group-text texto' id='telefono' type="text" placeholder='Telefono' onChange={e=>setTelefono(e.target.value)}/>
                    <input className='input-group-text texto' id='direccion' type="text" placeholder='Dirección' onChange={e=>setDireccion(e.target.value)}/>
                </div>
                <div className='but'><button className='btn btn-dark' onClick={()=>{
                    if(nombre!=='' && telefono!=='' && direccion!==''){
                        handleSubmit('http://localhost:18080/duenio/add');
                        handleclick();
                        document.getElementById('nombre').value=''
                        document.getElementById('telefono').value=''
                        document.getElementById('direccion').value=''
                    }
                    else alert('Llene todos los campos')}}
                    > Agregar</button></div>
            </div>
        </div>
    );
}
