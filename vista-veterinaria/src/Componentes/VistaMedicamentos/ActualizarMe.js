import React from 'react'
import { useState } from 'react'
import axios from 'axios';
export default function ActualizarMe(props) {
    const [idMedicamento,setIdMedicamento] = useState(0);
    const [codigo,setCodigo] = useState('');
    const [nombre,setNombre] = useState('');
    const [fechaCaducidad,setFechaCaducidad] = useState('');
    const [sustanciaActiva,setSustanciaActiva]=useState('');
    const peticionPost = (url,duenio)=>{
        axios.post(url,duenio).then()
    }
    const handleSubmit = (url) =>{
        let dato={
            idMedicamento:idMedicamento,codigo:codigo,nombre:nombre,fechaCaducidad:fechaCaducidad,sustanciaActiva:sustanciaActiva
        }
        peticionPost(url,dato);
        handleclick(1);
    }
    const handleclick = ()=>{
        alert('Se actualizará el medicamento');
        axios.get('http://localhost:18079/listMedicamentos').then(response=>props.onMedicamentosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div>
            <div className='aniadir'>
            <h2>Actualizar un medicamento</h2>
                <div className="">
                    <input className='input-group-text texto' type="text" id="idMedicamentoM2" placeholder='Id del Medicamento' onChange={e=>setIdMedicamento(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type="text" id="codigoMe2" placeholder='Código' onChange={e=>setCodigo(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="nombreMe2" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="fechaCaducidadMe2" placeholder='Fecha de caducidad' onChange={e=>setFechaCaducidad(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="sustanciaActivaMe2" placeholder='Sustancia Activa' onChange={e=>setSustanciaActiva(e.target.value)}/>
                </div>
                <div className='but'><button className='btn btn-dark' onClick={()=>{
                    if(idMedicamento!==0 &&codigo!=='' && nombre!=='' && fechaCaducidad!=='' && sustanciaActiva!==''){
                        handleSubmit('http://localhost:18079/medicamento/add');
                        setIdMedicamento(0)
                        setCodigo('');
                        setNombre('');
                        setFechaCaducidad('');
                        setSustanciaActiva('');
                        document.getElementById('idMedicamentoM2').value=''
                        document.getElementById('codigoMe2').value=''
                        document.getElementById('nombreMe2').value=''
                        document.getElementById('fechaCaducidadMe2').value=''
                        document.getElementById('sustanciaActivaMe2').value=''
                    }
                    else alert('Llene todos los campos')}}
                    > Agregar</button></div>
            </div>
        </div>
    )
}
