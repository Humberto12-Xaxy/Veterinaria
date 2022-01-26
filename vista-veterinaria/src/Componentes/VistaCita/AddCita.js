import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const Addcita = (props) => {
    const [fecha,setFecha] = useState();
    const [hora,setHora] = useState();
    const [tipoServicio,setTipoServicio] = useState();
    const peticionPost = (url,dato)=>{
        axios.post(url,dato).then(response=>{
            console.log(response)
        });
        
    }
    const handleSubmite =()=>{
        const cita ={
            fecha:fecha,
            hora:hora,
            tipoServicio:tipoServicio
        }
        let url= 'http://localhost:9999/cita/add';
        peticionPost(url,cita)
    }
    const handleSubmit2=(url)=>{
        alert('Se agregó la cita')
        axios.get(url).then(response=>{
            props.onCitasChange(response.data)
        });
    }
    return (
        <div>
            <div className="aniadir">
                <h2>Añadir una nueva Cita</h2>
                <div className="inputs">
                    <input className='input-group-text texto' type="text" id="fecha" placeholder='Fecha de Servicio' onChange={e=>setFecha(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="hora" placeholder='Hora de la cita' onChange={e=>setHora(e.target.value)}/>
                    <input className='input-group-text texto' type="text" id="tipoServicio" placeholder='Tipo de Servicio' onChange={e=>setTipoServicio(e.target.value)}/>
                </div>
                <div className='but'><button className='btn btn-dark' onClick={()=>{
                    if(fecha!=='' && hora!=='' && tipoServicio!==''){
                        handleSubmite();
                        handleSubmit2('http://localhost:9999/listCita');
                        setFecha('');
                        setHora('');
                        setTipoServicio('');
                        document.getElementById('fecha').value=''
                        document.getElementById('hora').value=''
                        document.getElementById('tipoServicio').value=''
                    }
                    else alert('Llene todos los campos')}}
                    > Agregar</button></div>
            </div>
            {/* <button onClick={()=>handleSubmit2()}>
                    Refrescar
            </button> */}
        </div>
    );
}

export default Addcita;
