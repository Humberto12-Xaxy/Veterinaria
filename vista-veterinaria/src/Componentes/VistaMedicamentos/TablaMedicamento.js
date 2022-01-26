import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
export default function TablaMedicamento(props) {
    const encabezados = ['idMedicamento','Código', 'Nombre', 'FechaCaducidad', 'Sustancia activa','',''];
    return (
        <div className="contenido">
            <div className="estados">
            <button type="button" class="btn btn-dark" onClick={()=>{
                props.onChangeEstado(2);
            }}>Acceder a las API'S</button>
            </div>
            <div className="tabla">
                <table responsive class="table">
                    <thead class="table-dark">
                        <tr>
                        {encabezados.map((encabezado) => (
                                    <th scope="col">{encabezado}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                    {props.medicamentos.map(({idMedicamento,codigo,nombre,fechaCaducidad,sustanciaActiva},i)=>(
                        <tr>
                            <td>{idMedicamento}</td><td>{codigo}</td><td>{nombre}</td><td>{fechaCaducidad}</td><td>{sustanciaActiva}</td><td><button onClick={()=>{
                                props.onMedicamentoChange({idMedicamento,codigo:codigo,nombre:nombre,fecha:fechaCaducidad,sustanciaActiva:sustanciaActiva});
                                props.onChangeEstado(1);
                            }} className='btn boton'>Ver más</button></td><td><button className='btn boton' onClick={()=>{
                                props.onMedicamentoChange({idMedicamento,codigo:codigo,nombre:nombre,fecha:fechaCaducidad,sustanciaActiva:sustanciaActiva});
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