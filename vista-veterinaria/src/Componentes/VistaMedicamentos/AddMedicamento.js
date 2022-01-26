import React, { useState } from 'react'
import axios from 'axios';
export default function AddMedicamento(props) {
    const [codigo,setCodigo] = useState('');
    const [nombre,setNombre] = useState('');
    const [fechaCaducidad,setFechaCaducidad] = useState('');
    const [sustanciaActiva,setSustanciaActiva]=useState('');
    const peticionPost = (url,dato)=>{
        axios.post(url,dato).then()
    }
    const handleSubmit = (url)=>{
        let dato={
            codigo:codigo,nombre:nombre,fechaCaducidad:fechaCaducidad,sustanciaActiva:sustanciaActiva
        }
        
        peticionPost(url,dato);
        handleclick();
    }
    const handleclick = ()=>{
        alert('Se añadirá el medicamento');
        axios.get('http://localhost:18079/listMedicamentos').then(response=>props.onMedicamentosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div>
            <div className="aniadir">
                <h2>Añadir una nuevo medicamento</h2>
                <div className="inputs">
                    <input className='input-group-text texto' type="number" id="codigoMe" placeholder='Código' onChange={e=>setCodigo(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type="text" id="nombreMe" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="fechaCaducidadMe" placeholder='Fecha de caducidad' onChange={e=>setFechaCaducidad(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="sustanciaActivaMe" placeholder='Sustancia Activa' onChange={e=>setSustanciaActiva(e.target.value)}/>
                </div>
                <div className='but'><button className='btn btn-dark' onClick={()=>{
                    if(codigo!=='' && nombre!=='' && fechaCaducidad!=='' && sustanciaActiva!==''){
                        handleSubmit('http://localhost:18079/medicamento/add');
                        setCodigo('');
                        setNombre('');
                        setFechaCaducidad('');
                        setSustanciaActiva('');
                        document.getElementById('codigoMe').value=''
                        document.getElementById('nombreMe').value=''
                        document.getElementById('fechaCaducidadMe').value=''
                        document.getElementById('sustanciaActivaMe').value=''
                    }
                    else alert('Llene todos los campos')}}
                    > Agregar</button></div>
            </div>
        </div>
    )
}
