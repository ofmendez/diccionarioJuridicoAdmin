import React from 'react';
import BarraSuperiorMovil from '../components/BarraSuperiorMovil.jsx';
import SeccionEstadisticas from '../components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '../components/SeccionUsuarios.jsx';
import SeccionTerminos from '../components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '../components/SeccionPalabraDelDia.jsx';

const Home = ({children}) => {
	return (
		<>
			<div className="ContenidoPagina" id="ContenidoPagina">
				<BarraSuperiorMovil/>
				<SeccionEstadisticas/>
				<div className="SeccionContenidoHome" id="SeccionContenidoHome">
					<div className="ColumnaIzquierdaHome">
						<SeccionUsuarios/>
						<SeccionTerminos/>
					</div>
					<div className="ColumnaDerechaHome">
						<SeccionPalabraDelDia/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
