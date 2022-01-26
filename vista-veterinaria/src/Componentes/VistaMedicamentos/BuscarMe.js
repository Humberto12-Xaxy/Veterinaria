import React from 'react';
import axios from 'axios';
import { useState  } from 'react';
const BuscarMe = (props) => {
    const [sustanciaA,setSustanciaA] = useState('');
    
    const peticionPost = (url,dato)=>{
        axios.post(url,dato).then(response=>{
            props.onMedicamentosChange(response.data);
        })
    }
    const hundleSubmit=(url)=>{
        const dato = {idMedicamento:0,codigo:0,nombre:'',fechaCaducidad:'',sustanciaActiva:sustanciaA}
        peticionPost(url,dato);
        
    }
    const handleclick = ()=>{
        axios.get('http://localhost:18079/listMedicamentos').then(response=>props.onMedicamentosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div className='aniadir busc margen'>
            <h2>Buscar un medicamento</h2>
                <div className="inputs">
                    <input className='input-group-text' type='text' id='sustanciaActivaMe3' placeholder='Sustancia activa' onChange={e=>setSustanciaA(e.target.value)}/>
                    <div><button className='btn btn-dark'  onClick={()=>{
                        if(sustanciaA!=='') {
                            hundleSubmit('http://localhost:18079/medicamento/sustanciaActiva');
                            setSustanciaA('');
                            document.getElementById('sustanciaActivaMe3').value='';
                        }
                        else alert('Rellene el formulario');
                    }}>Actualizar</button></div>
                    <button className='btn btn-dark botn2' onClick={()=>{
                        handleclick();
                    }}>Limpiar</button>
                </div>
        </div>
    );
}

export default BuscarMe;
