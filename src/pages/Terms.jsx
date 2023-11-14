import React from 'react';
import { Link } from 'react-router-dom';

import { IconoAgTermino, IconoLupa } from '@components/icons.js';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import ContentFrame from '@src/components/ContentFrame';

const Terms = () => {
	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div className='SeccionBuscador'>
					<form className='FormaBuscador' action=''>
						<div className='SeccionInputBuscador'>
							<img className='IconoLupa' src={IconoLupa} />
							<input className='InputBuscador' type='text' placeholder='Buscar' name='buscar' />
						</div>
						<button className='SubmitBusqueda' type='submit' value='BUSCAR'>
							BUSCAR
						</button>
					</form>
				</div>
				<div>
					<Link to='./new' className='BotonAgregar'>
						<img className='IconoMenu' src={IconoAgTermino} />
						Agregar Término
					</Link>
				</div>
			</div>
			<SeccionTerminos />
		</ContentFrame>
	);
};
export default Terms;
