import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function ActualizarM(props) {
    const [idMascota,setIdMascota] = useState(0)
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [idDuenio, setIdDuenio] = useState(0);
    const [idCita, setIdCita] = useState(0);
    const [idMedicamento, setIdMedicamento] = useState(0);
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [razon, setRazon] = useState('');
    const peticionPost = (url,dato)=>{
        axios.post(url,dato).then(response=>{
            console.log(response)
        })
    }
    const handleClick= ()=>{
        const dato = {idMascota:idMascota,nombre:nombre,tipo:tipo,idDuenio:idDuenio,idCita:idCita,idMedicamento:idMedicamento,fechaIngreso:fechaIngreso,razon:razon};
        peticionPost('http://localhost:9998/mascota/update',dato);
    }
    const hundleClick = () =>{
        alert('Se actualizará el dato')
        axios.get('http://localhost:9998/listMascotas').then(response=>{
            props.onMascotasChange(response.data);
        }).catch(console.log('No se pudo actualizar'));
    }
    return (
        <div className="aniadir margen ">
                <h2>Actualizar Mascota</h2>
                <div className="">
                    <input className='input-group-text texto' type='number' id='idMascota' placeholder='IdMascota' onChange={e=>setIdMascota(parseInt(e.target.value))}></input>
                    <input className='input-group-text texto' type="text" name="nombre" id="nombreM2" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                    <input className='input-group-text texto' type="text" name="tipo" id="tipoM2" placeholder='Tipo' onChange={e=>setTipo(e.target.value)}/>
                    <input className='input-group-text texto' type="number" name="idDuenio" id="idDuenioM2" placeholder='IdDuenio' onChange={e=>setIdDuenio(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type="number" name="idCita" id="idCitaM2" placeholder='IdCita' onChange={e=>setIdCita(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type="number" name="idMedicamento" id="idMedicamentoM2" placeholder='IdMedicamento' onChange={e=>setIdMedicamento(parseInt(e.target.value))}/>
                    <input className='input-group-text texto' type="text" name="fechaIngreso" id="fechaIngresoM2" placeholder='Fecha de ingreso' onChange={e=>setFechaIngreso(e.target.value)}/>
                    <input className='input-group-text texto' type="text" name="razon" id="razonM2" placeholder='Razon' onChange={e=>setRazon(e.target.value)}/>
                </div>
                <div className='but'><button onClick={()=>{
                    if(idMascota!==0 && nombre!=='' && tipo!=='' && idDuenio!==0 && idCita!==0 && idMedicamento!==0 && fechaIngreso!=='' && razon!==''){
                        handleClick();
                        hundleClick();
                        setNombre('');
                        setTipo('');
                        setIdDuenio('');
                        setIdCita('');
                        setIdMedicamento('')
                        setFechaIngreso('');
                        setRazon('');
                        
                }} className='btn btn-dark'>Actualizar</button></div>
            </div>
    )
}
