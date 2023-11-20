import React from 'react';
import { IcoCronologia, IcoTerminos, IcoUsrRegistrados, IconoNoPerfil } from '@components/icons.js';

const SeccionEstadisticas = () => {
	return (
		<div className='SeccionMensajeEstadisticas' id='SeccionMensajeEstadisticas'>
			<div className='SeccionMensajeBienvenida'>
				<div className='SeccionImagenUsuario'>
					<img className='ImagenMiniaturaPerfil' src={IconoNoPerfil} />
				</div>
				<div className='MensajeBienvenida'>
					<span>Hola {JSON.parse(window.localStorage.user).name.split(' ')[0]}</span> {/* TODO: Cambiar por el nombre del usuario	*/}
					<br />
					<span>¡Bienvenida!</span>
				</div>
			</div>
			<div className='SeccionEstadisticas'>
				<div className='ModuloEstadistica'>
					<div><img className='ImagenIconoEstadisticas' src={IcoUsrRegistrados} /></div>
					<div className='ContenidosEstadisticas'>
						<p className='IndicadorEstadisticas'>---</p> {/* TODO: cambiar por estadisticas	*/}
						<p>Usuarios registrados</p>
					</div>
				</div>
				<div className='ModuloEstadistica'>
					<div><img className='ImagenIconoEstadisticas' src={IcoTerminos} /></div>
					<div className='ContenidosEstadisticas'>
						<p className='IndicadorEstadisticas'>---</p>
						<p>Términos publicados</p>
					</div>
				</div>
				<div className='ModuloEstadistica ModuloEstadisticaLargeScreen'>
					<div><img className='ImagenIconoEstadisticas' src={IcoCronologia} /></div>
					<div className='ContenidosEstadisticas'>
						<p className='IndicadorEstadisticas'>--/--/----</p>
						<p>Última modificación</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SeccionEstadisticas;
