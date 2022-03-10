import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const TablaMascotaU = (props) => {
    const encabezados = ['Nombre', 'Tipo', 'FechaIngreso', 'Razon',];
    return (
        <div className="contenido">
            {/* <div className="estados">
                <button type="button" class="btn btn-dark" onClick={() => {
                    props.onChangeEstado(3);
                }}>Acceder a las API'S</button>
            </div> */}
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
                        {props.mascotas.map(({nombre,raza, fechaIngreso, razon }, i) => (
                            <tr>
                                <td>{nombre}</td><td>{raza}</td><td>{fechaIngreso}</td><td>{razon}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaMascotaU;