import React from 'react'
import { useState } from 'react';
import axios from'axios';
export default function DeleteMe(props) {
    
    const dato = {idMedicamento:0,codigo:0,nombre:'',fechaCaducidad:'',sustanciaActiva:''}
    var url='';
    const peticionPost = ()=>{
        axios.post(url,dato)
    }
    const eliminar = () =>{
        url= 'http://localhost:18079/medicamento/delete';
        dato.idMedicamento=props.medicamento.idMedicamento; dato.codigo=props.medicamento.codigo; dato.nombre=props.medicamento.nombre; dato.fechaCaducidad = props.medicamento.fechaCaducidad; dato.sustanciaActiva=props.medicamento.sustanciaActiva;
        peticionPost();
        handleclick();
    }
    const handleclick = ()=>{
        axios.get('http://localhost:18079/listMedicamentos').then(response=>props.onMedicamentosChange(response.data)).catch('No se puso recibir los datos')
    }
    return (
        <div>
            
            {eliminar()}
            
        </div>
    )
}
