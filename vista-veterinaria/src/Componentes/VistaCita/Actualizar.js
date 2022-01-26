import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function Actualizar(props) {
    const [idCita,setIdCita] = useState(0)
    const [fecha,setFecha] = useState('');
    const [hora,setHora] = useState('');
    const [tipoServicio,setTipoServicio] = useState('');
    
    const peticionPost = (url,dato)=>{
        axios.post(url,dato).then(response=>{
            console.log(response)
        });
    }
    const handleSubmit=(url)=>{
        const cita = {
            idCita:idCita,
            fecha:fecha,
            hora:hora,
            tipoServicio:tipoServicio
        }
        peticionPost(url,cita);
    }
    const handleSubmit2=(url='http://localhost:9999/listCita')=>{
        alert('Se actualizó la cita');
        axios.get(url).then(response=>{
            props.onCitasChange(response.data); 
        }).catch(console.log('No se pudo realizar la busqueda'));
    }
    return (
        <div className="aniadir margen ">
                <h2>Actualizar una cita</h2>
                <div className="inputs">
                    <input className='input-group-text texto' type='text' id='idCita2' placeholder='id de la Cita' onChange={e=>parseInt(setIdCita(e.target.value))}/>
                    <input className='input-group-text texto' type='text' id='fecha2' placeholder='Fecha' onChange={e=>setFecha(e.target.value)}/>
                    <input className='input-group-text texto' type='text' id='hora2' placeholder='Hora' onChange={e=>setHora(e.target.value)}/>
                    <input className='input-group-text texto' type='text' id='tipoServicio2' placeholder='Tipo de Servicio' onChange={e=>setTipoServicio(e.target.value)}/>
                </div>
                <div className='but'><button onClick={()=>{
                    if(idCita!==0 && fecha!=='' && hora!=='' && tipoServicio!==''){
                        let url='http://localhost:9999/cita/update';
                        handleSubmit(url);
                        handleSubmit2()
                        setIdCita(0);
                        setFecha('');
                        setHora('');
                        setTipoServicio('');
                        document.getElementById('idCita2').value=''
                        document.getElementById('fecha2').value=''
                        document.getElementById('hora2').value=''
                        document.getElementById('tipoServicio2').value=''
                    }else if(idCita!==0 && fecha!=='' && hora==='' && tipoServicio===''){
                        let url='http://localhost:9999/cita/update/fecha';
                        handleSubmit(url);
                        handleSubmit2()
                        setIdCita(0);
                        setFecha('');
                        document.getElementById('idCita2').value='';
                        document.getElementById('fecha2').value='';
                    }else if(idCita!==0 && fecha==='' && hora!=='' && tipoServicio===''){
                        let url='http://localhost:9999/cita/update/hora';
                        handleSubmit(url);
                        handleSubmit2()
                        setIdCita(0);
                        setHora('');
                        document.getElementById('idCita2').value='';
                        document.getElementById('hora2').value='';
                    }
                    else alert('Llena todos los campos') 
                }} className='btn btn-dark'>Actualizar</button></div>
            </div>
    )
}
