import React from 'react';
import { useState,useEffect } from 'react';
import DescripcionM from '../VistaCita/DescripcionM';
const DuenioCmascota = (props) => {
    const [duenioCmascota,setDuenioCMascota] = useState();
    useEffect(()=>{
        document.title='Dueños';
        if (props.duenio !== null && props.duenio !== undefined){
            obtenerDueniosCMascota();
        }
    });
    const obtenerDueniosCMascota = async () => {
        const dato = await fetch('http://localhost:18080/duenioConMascotas/'+props.duenio.idDuenio);
        const duenioCmascota = await dato.json();
        setDuenioCMascota(duenioCmascota);
    }
    if (duenioCmascota !== undefined && document.title==='Dueños'){
        return (
            <div id='desc' className={'mostrarCompleto'}>
                {console.log(duenioCmascota.mascotas)}
                <div className='descr'>
                    <h2>Descripción de la Cita</h2>
                    <p><span>Id del dueño: </span> {duenioCmascota.idDuenio}</p>
                    <p><span>Nombre: </span> {duenioCmascota.nombre}</p>
                    <p><span>Telefono: </span> {duenioCmascota.telefono}</p>
                    <p><span>Direccion: </span>{duenioCmascota.direccion}</p>
                    <h2>Mascotas</h2>
                    {duenioCmascota.mascotas !== null ? duenioCmascota.mascotas.map(({idMascota,nombre,tipo,razon},i)=>(
                        <div>
                            <h5>Mascota {i+1}</h5>
                            <DescripcionM id={idMascota} nombre={nombre} tipo={tipo} razon={razon}/>
                        </div>
                    ))
                    :<h2>No hay mascotas</h2>}
                </div>
            </div>
        )
    }
    else return <div></div>
}

export default DuenioCmascota;
