import React from 'react'
import { useState,useEffect } from 'react';
import DescripcionM from '../VistaCita/DescripcionM';
export default function MedicamentoCMascota(props) {
    const [medicamentosCmascota,setMedicamentosCMascota] = useState();
    useEffect(()=>{
        document.title='Medicamentos';
        if (props.medicamento !== null && props.medicamento!== undefined && props.medicamento !== undefined){
            obtenerMedicamentoCMascotas();
        }
    });
    const obtenerMedicamentoCMascotas = async () => {
        const dato = await fetch('http://localhost:18079/MedicamentosMascotas/'+props.medicamento.idMedicamento);
        const medicamentoA = await dato.json();
        setMedicamentosCMascota(medicamentoA);
    }
    if (medicamentosCmascota !== undefined && document.title==='Medicamentos'){
        return (
            <div id='desc' className={'mostrarCompleto'}>
                {console.log(medicamentosCmascota.mascotas)}
                <div className='descr'>
                    <h2>Descripción de la Cita</h2>
                    <p><span>Id del medicamento: </span> {medicamentosCmascota.idMedicamento}</p>
                    <p><span>Codigo: </span> {medicamentosCmascota.codigo}</p>
                    <p><span>Nombre: </span> {medicamentosCmascota.nombre}</p>
                    <p><span>Fecha de Caducidad: </span>{medicamentosCmascota.fechaCaducidad}</p>
                    <p><span>Sustancia activa: </span>{medicamentosCmascota.sustanciaActiva}</p>
                    <h2>Mascotas</h2>
                    {medicamentosCmascota.mascotas !== null ? medicamentosCmascota.mascotas.map(({idMascota,nombre,tipo,razon},i)=>(
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
