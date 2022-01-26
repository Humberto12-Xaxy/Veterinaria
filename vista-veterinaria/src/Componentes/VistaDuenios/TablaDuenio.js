import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
export default function TablaDuenio(props) {
    const encabezados = ['idDuenio', 'Nombre', 'Telefono', 'Dirección','',''];
    return (
        <div className="contenido">
            <div className="estados">
            <button type="button" class="btn btn-dark" onClick={()=>{
                props.onChangeEstado(2);
            }}>Acceder a las API'S</button>
            </div>
            <div className="tabla">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                        {encabezados.map((encabezado) => (
                                    <th scope="col">{encabezado}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {props.duenios.map(({idDuenio,nombre,telefono,direccion},i)=>(
                        <tr>
                            <td>{idDuenio}</td><td>{nombre}</td><td>{telefono}</td><td>{direccion}</td><td><button onClick={()=>{
                                props.onDuenioChange({idDuenio:idDuenio,nombre:nombre,telefono:telefono,tipoServicio:direccion});
                                props.onChangeEstado(1);
                            }} className='btn boton'>Ver más</button></td><td><button className='btn boton' onClick={()=>{
                                props.onDuenioChange({idDuenio:idDuenio,nombre:nombre,telefono:telefono,tipoServicio:direccion});
                                props.onChangeEstado(3);
                            }}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
