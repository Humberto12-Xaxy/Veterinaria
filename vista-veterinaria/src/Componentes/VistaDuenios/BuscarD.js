import React from 'react'
import axios from 'axios';
import { useState } from 'react';
export default function BuscarD(props) {
    const [telefono,setTelefono] = useState('');
    const peticionPost = (url,duenio)=>{
        axios.post(url,duenio).then(response=>{
            props.onDueniosChange(response.data);
        })
    }
    const handleSubmit = (url)=>{
        const duenio={
            idDuenio:0,
            nombre:'',
            telefono:telefono,
            direccion:''
        }
        peticionPost(url,duenio)
    }
    const handleSubmit2=()=>{
        
        axios.get('http://localhost:18080/listDuenios').then(response=>{
            props.onDueniosChange(response.data)
        });
    }
    return (
        <div className='aniadir busc margen'>
            <h2>Buscar un dueño</h2>
                <div className="inputs">
                    <input className='input-group-text' type='text' id='telefono3' placeholder='Telefono' onChange={e=>setTelefono(e.target.value)}/>
                    <div><button className='btn btn-dark' onClick={()=>{
                        
                        if(telefono!=='') {
                            handleSubmit('http://localhost:18080/duenio/telefono');
                            setTelefono('');
                            document.getElementById('telefono3').value='';
                        }
                        else alert('Rellene el formulario');
                    }}>Actualizar</button></div>
                    <button className='btn btn-dark botn2' onClick={()=>{
                        handleSubmit2();
                    }}>Limpiar</button>
                </div>
        </div>
    )
}
