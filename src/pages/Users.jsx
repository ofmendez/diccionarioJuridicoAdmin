import React from 'react';

import { IconoAgUsuario, IconoLupa } from '@components/icons.js';
import MainsSeparator from '@components/MainSeparator.jsx';
import ContentFrame from '@components/ContentFrame.jsx';
import { Link } from 'react-router-dom';
import SeccionUsuarios from '@src/components/SeccionUsuarios';

const Users = () => {
	const options = ['Filtrar', 'Administrador', 'Editor', 'Lector', 'Activo', 'Inactivo'];

	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div>
					<div className='SeccionBuscador'>
						{/* <form className='FormaBuscador' action=''>
							<div className='SeccionInputBuscador'>
								<img className='IconoLupa' src={IconoLupa} />
								<input className='InputBuscador' type='text' placeholder='Buscar' name='buscar' />
							</div>
							<button className='SubmitBusqueda' type='submit' value='BUSCAR'>
								BUSCAR
							</button>
						</form> */}
					</div>
				</div>

				<div>
					{/* <form>
						<select name='select' className='FiltrosBusqueda' defaultValue={options[0]}>
							{
								options.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
							}
						</select>
					</form> */}
				</div>
				<div>
					<Link to='./new' className='BotonAgregar'>
						<img className='IconoMenu' src={IconoAgUsuario} />
						Agregar Usuario
					</Link>
				</div>
			</div>
			<SeccionUsuarios />
		</ContentFrame>
	);
};

export default Users;
