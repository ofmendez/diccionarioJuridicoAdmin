import React from 'react';

const SeccionEstadisticas = () => {
	return (
				<div className="SeccionMensajeEstadisticas" id="SeccionMensajeEstadisticas">
					<div className="SeccionMensajeBienvenida">
						<div className="SeccionImagenUsuario">
							<img className="ImagenMiniaturaPerfil" src="/Images/Icons/NoProfile.svg"/>
						</div>
						<div className="MensajeBienvenida"> 
							<span>Hola Margarita</span>
							<br/>
							<span>¡Bienvenida!</span>
						</div>
					</div>
					<div className="SeccionEstadisticas">
						<div className="ModuloEstadistica">
							<div><img className="ImagenIconoEstadisticas" src="/Images/Icons/UsuariosRegistrados.svg"/></div>
							<div className="ContenidosEstadisticas">
								<p className="IndicadorEstadisticas">150</p>
								<p>Usuarios registrados</p>
							</div>
						</div>
						<div className="ModuloEstadistica">
							<div><img className="ImagenIconoEstadisticas" src="/Images/Icons/Palabras.svg"/></div>
							<div className="ContenidosEstadisticas">
								<p className="IndicadorEstadisticas">85</p>
								<p>Términos publicados</p>
							</div>
						</div>
						<div className="ModuloEstadistica ModuloEstadisticaLargeScreen">
							<div><img className="ImagenIconoEstadisticas" src="/Images/Icons/Cronologia.svg"/></div>
							<div className="ContenidosEstadisticas">
								<p className="IndicadorEstadisticas">25/07/2023</p>
								<p>Última modificación</p>
							</div>
						</div>
					</div>
				</div>
	);
}

export default SeccionEstadisticas;
