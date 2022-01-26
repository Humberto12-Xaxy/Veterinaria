import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
export default function TablaCita(props) { 
    const encabezados = ['idCita', 'Fecha', 'Hora', 'Tipo de Servicio','',''];
    
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
                    {props.citas.map(({idCita,fecha,hora,tipoServicio},i)=>(
                        <tr>
                            <td>{idCita}</td><td>{fecha}</td><td>{hora}</td><td>{tipoServicio}</td><td><button onClick={()=>{
                                props.onCitaChange({idCita:idCita,fecha:fecha,hora:hora,tipoServicio:tipoServicio});
                                props.onChangeEstado(1)
                            }} className='btn boton'>Ver más</button></td><td><button className='btn boton' onClick={()=>{
                                props.onCitaChange({idCita:idCita,fecha:fecha,hora:hora,tipoServicio:tipoServicio});
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
