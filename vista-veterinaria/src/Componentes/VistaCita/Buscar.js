import React from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function Buscar(props) {
    const [fecha,setFecha] = useState('');
    const peticionPost = (url,cita)=>{
        axios.post(url,cita).then(response=>{
            props.onCitasChange(response.data);
        });
    }
    const handleSubmit=()=>{
        const cita={
            idCita:0,
            fecha:fecha,
            hora:'',
            tipoServicio:''
        }
        let url = 'http://localhost:9999/cita/fecha/';
        peticionPost(url,cita)
    }
    const handleSubmit2=()=>{
        axios.get('http://localhost:9999/listCita').then(response=>{
            props.onCitasChange(response.data)
        })
    }
    return (
        <div className='aniadir busc margen'>
            <h2>Buscar una cita</h2>
                <div className="inputs">
                    <input className='input-group-text' type='text' id='fecha3' placeholder='Fecha de la Cita' onChange={e=>setFecha(e.target.value)}/>
                    <div><button className='btn btn-dark' onClick={()=>{
                        if(fecha!=='') handleSubmit()
                        else alert('Rellene el formulario');
                    }}>Actualizar</button></div>
                    <button className='btn btn-dark botn2' onClick={()=>{
                        handleSubmit2();
                    }}>Limpiar</button>
                </div>
        </div>
    )
}
