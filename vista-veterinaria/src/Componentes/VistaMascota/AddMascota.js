import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function AddMascota(props) {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [idDuenio, setIdDuenio] = useState(0);
    const [idCita, setIdCita] = useState(0);
    const [idMedicamento, setIdMedicamento] = useState(0);
    const [fechaIngreso, setFechaIngreso] = useState('');
    const [razon, setRazon] = useState('');
    
    const peticionPost = (dato,url)=>{
        axios.post(url,dato).then(response=>{
            console.log()
        }).catch()
    }
    const handleClick= ()=>{

        const dato = {nombre:nombre,tipo:tipo,idDuenio:idDuenio,idCita:idCita,idMedicamento:idMedicamento,fechaIngreso:fechaIngreso,razon:razon};
        peticionPost(dato,'http://localhost:9998/mascota/add');
    }
    const hundleClick = () =>{
        alert('Se agregará el dato')
        axios.get('http://localhost:9998/listMascotas').then(response=>{
            props.onMascotasChange(response.data);
        }).catch(console.log('No se pudo actualizar'));
    }
    return (
        <div>
            <div className="aniadir">
                <h2>Añadir una nueva mascota</h2>
                <div className="formudata">
                    <div className=''>
                        <input className='input-group-text texto' type="text" name="nombre" id="nombreM" placeholder='Nombre' onChange={e=>setNombre(e.target.value)}/>
                        <input className='input-group-text texto' type="text" name="tipo" id="tipoM" placeholder='Tipo' onChange={e=>setTipo(e.target.value)}/>
                        <input className='input-group-text texto' type="number" name="idDuenio" id="idDuenioM" placeholder='IdDuenio' onChange={e=>setIdDuenio(parseInt(e.target.value))}/>
                        <input className='input-group-text texto' type="number" name="idCita" id="idCitaM" placeholder='IdCita' onChange={e=>setIdCita(parseInt(e.target.value))}/>
                        <input className='input-group-text texto' type="number" name="idMedicamento" id="idMedicamentoM" placeholder='IdMedicamento' onChange={e=>setIdMedicamento(parseInt(e.target.value))}/>
                        <input className='input-group-text texto' type="text" name="fechaIngreso" id="fechaIngresoM" placeholder='Fecha de ingreso' onChange={e=>setFechaIngreso(e.target.value)}/>
                        <input className='input-group-text texto' type="text" name="razon" id="razonM" placeholder='Razon' onChange={e=>setRazon(e.target.value)}/>
                        <button className='btn btn-dark' onClick={()=>{
                            if(nombre!=='' && tipo!=='' && idDuenio!==0 && idMedicamento!==0 && idCita!==0 && fechaIngreso!=='' && razon!==''){
                                handleClick();
                                hundleClick();
                                setNombre('');
                                setTipo('');
                                setIdDuenio('');
                                setIdCita('');
                                setIdMedicamento('')
                                setFechaIngreso('');
                                setRazon('');
                                document.getElementById('nombreM').value='';
                                document.getElementById('tipoM').value='';
                                document.getElementById('idDuenioM').value='';
                                document.getElementById('idCitaM').value=''
                                document.getElementById('idMedicamentoM').value='';
                                document.getElementById('fechaIngresoM').value='';
                                document.getElementById('razonM').value='';
                            }
                            else{alert('Llene todos los campos')}
                        }}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
