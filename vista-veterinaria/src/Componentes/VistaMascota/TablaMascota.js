import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const TablaMascota = (props) => {
    const encabezados = ['IdMascota', 'Nombre', 'Tipo','IdDueño','IdCita','IdMedicamento','FechaIngreso','Razon','',''];
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
                    {props.mascotas.map(({idMascota,nombre,tipo,idDuenio,idCita,idMedicamento,fechaIngreso,razon},i)=>(
                        <tr>
                            <td>{idMascota}</td><td>{nombre}</td><td>{tipo}</td><td>{idDuenio}</td><td>{idCita}</td><td>{idMedicamento}</td><td>{fechaIngreso}</td><td>{razon}</td><td><button onClick={()=>{
                                props.onMascotaChange({idMascota:idMascota,nombre:nombre,tipo:tipo,idDuenio:idDuenio,idCita:idCita,idMedicamento:idMedicamento,fechaIngreso:fechaIngreso,raon:razon});
                                props.onChangeEstado(1)
                            }} className='btn boton'>Ver más</button></td><td><button className='btn boton' onClick={()=>{
                                props.onMascotaChange({idMascota:idMascota,nombre:nombre,tipo:tipo,idDuenio:idDuenio,idCita:idCita,idMedicamento:idMedicamento,fechaIngreso:fechaIngreso,raon:razon});
                                props.onChangeEstado(3);
                            }}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaMascota;
