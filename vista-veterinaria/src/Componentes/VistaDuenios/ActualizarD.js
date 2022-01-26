import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function ActualizarD(props) {
    const [idDuenio,setIdDuenio] = useState(0);
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
            idDuenio:idDuenio,
            nombre:nombre,
            telefono:telefono,
            direccion:direccion
        }
        peticionPost(url,duenio)
    }
    const handleclick = ()=>{
        alert('Se actualicó el dato')
        axios.get('http://localhost:18080/listDuenios').then(response=>props.onDueniosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div className="aniadir margen">
                <h2>Actualizar un Dueño</h2>
                <div className="inputs">
                    <input className='input-group-text texto' type='text' id='idDuenio2' placeholder='Id del Dueño' onChange={e=>setIdDuenio(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type='text' id='nombre2' placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                    <input className='input-group-text texto' type='text' id='telefono2' placeholder='Telefono' onChange={e=>setTelefono(e.target.value)}/>
                    <input className='input-group-text texto' type='text' id='direccion2' placeholder='Direccion' onChange={e=>setDireccion(e.target.value)}/>
                </div>
                <div className='but'><button onClick={()=>{
                    let url= 'http://localhost:18080/duenio/update';
                    if(idDuenio!==0 && nombre!=='' && telefono!=='' && direccion!==''){
                        handleSubmit(url);
                        handleclick();
                        setIdDuenio(0);
                        setNombre('');
                        setTelefono('');
                        setDireccion('');
                        document.getElementById('idDuenio2').value='';
                        document.getElementById('nombre2').value='';
                        document.getElementById('telefono2').value='';
                        document.getElementById('direccion2').value='';
                    }
                    else {alert('Rellene todos los campos');}
                }} className='btn btn-dark'>Actualizar</button></div>
            </div>
    )
}
