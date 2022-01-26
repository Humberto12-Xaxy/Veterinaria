import React from 'react'
import { useState,useEffect } from 'react';
import DescripcionD from '../VistaDuenios/DescripcionD';

export default function MascotaCDuenio(props) {
    const [mascotaCDuenio,setMascotaCDuenio] = useState();
    useEffect(()=>{
        document.title='Mascotas';
        if (props.mascota !== null && props.mascota !== undefined){
            obtenerMascotasCDuenio();
        }
    })
    const obtenerMascotasCDuenio = async () => {
        const dato = await fetch('http://localhost:9998/mascotaConDuenio/'+props.mascota.idMascota);
        const mascotaCDuenioA = await dato.json();
        setMascotaCDuenio(mascotaCDuenioA);
    }
    if (mascotaCDuenio !== undefined && document.title==='Mascotas'){
        return (
            <div id='desc' className={'mostrarCompleto'}>
                <div className='descr'>
                    <h2>Descripción de la mascota</h2>
                    <p><span>Id de la mascota: </span> {mascotaCDuenio.idMascota}</p>
                    <p><span>Nombre: </span> {mascotaCDuenio.nombre}</p>
                    <p><span>Tipo: </span> {mascotaCDuenio.tipo}</p>
                    <p><span>Fecha de ingreso: </span>{mascotaCDuenio.fechaIngreso}</p>
                    <p><span>Razon de ingreso: </span>{mascotaCDuenio.razon}</p>
                    <h3>Dueño</h3>
                    <div>
                        {
                            mascotaCDuenio.duenio !== null ? <DescripcionD id = {mascotaCDuenio.duenio.idDuenio} nombre = {mascotaCDuenio.duenio.nombre}
                            telefono={mascotaCDuenio.duenio.telefono} direccion = {mascotaCDuenio.duenio.direccion}/>
                            : <p>No hay dueño asignado a esta cita</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
    else return <div></div>
}
