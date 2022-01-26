import React from 'react';
import { useState } from 'react';
import axios from'axios';
export default function DeleteC(props) {
    const [post, setPost] = useState(false)
    const dato = {idCita:0,fecha:'',hora:'',tipoServicio:''}
    var url='';
    const peticionPost = ()=>{
        axios.post(url,dato).then(response=>{
            setPost(response.data);
        })
    }
    const eliminar = () =>{
        url= 'http://localhost:9999/cita/delete';
        dato.idCita=props.cita.idCita; dato.fecha=props.cita.fecha; dato.hora=props.cita.hora; dato.tipoServicio = props.cita.tipoServicio;
        peticionPost();
        handleSubmit2('http://localhost:9999/listCita');
    }
    const handleSubmit2=(url)=>{
        axios.get(url).then(response=>{
            props.onCitasChange(response.data)
        }).catch('No se puso recibir los datos  ');
    }
    return (
        <div>
    
            {eliminar()}
            
        </div>
    )
}
