import React from 'react'
import { useState,useEffect } from 'react';
import DescripcionM from './DescripcionM';
export default function CitaCMascota(props) {
    const [citaCmascota,setCitaCMascota] = useState();
    useEffect(()=>{
        document.title='Citas';
        if (props.cita !== null && props.cita !== undefined){
            obtenerCitasCMascota();
        }
    })
    const obtenerCitasCMascota = async () => {
        const dato = await fetch('http://localhost:9999/MascotaConCita/'+props.cita.idCita);
        const citaCmascotaA = await dato.json();
        setCitaCMascota(citaCmascotaA);
    }
    if (citaCmascota !== undefined && document.title==='Citas'){
        return (
            <div id='desc' className={'mostrarCompleto'}>
                <div className='descr'>
                    <h2>Descripción de la Cita</h2>
                    <p><span>Id de la cita:</span> {citaCmascota.idCita}</p>
                    <p><span>Fecha:</span> {citaCmascota.fecha}</p>
                    <p><span>Hora de la cita:</span> {citaCmascota.hora}</p>
                    <p><span>Tipo de Servicio: </span>{citaCmascota.tipoServicio}</p>
                    <h3>Mascota</h3>
                    <div>
                        {
                            citaCmascota.mascota != null ? <DescripcionM id = {citaCmascota.mascota.idMascota} nombre = {citaCmascota.mascota.nombre}
                            tipo={citaCmascota.mascota.tipo} razon = {citaCmascota.mascota.razon}/>
                            : <p>No hay mascota asignada a esta cita</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else return <div></div>
}
