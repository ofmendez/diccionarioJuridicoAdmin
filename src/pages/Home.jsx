import React from 'react';
import BarraSuperiorMovil from '@src/components/BarraSuperiorMovil.jsx';
import SeccionEstadisticas from '@src/components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '@src/components/SeccionUsuarios.jsx';
import SeccionTerminos from '@src/components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '@src/components/SeccionPalabraDelDia.jsx';
import { users } from "./../../mocks/users.json"

const Home = ({children}) => {
	return (
		<>
			<div className="ContenidoPagina" id="ContenidoPagina">
				<BarraSuperiorMovil />
				<SeccionEstadisticas />
				<div className="SeccionContenidoHome" id="SeccionContenidoHome">
					<div className="ColumnaIzquierdaHome">
						<SeccionUsuarios users={users} />
						<SeccionTerminos />
					</div>
					<div className="ColumnaDerechaHome">
						<SeccionPalabraDelDia />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
