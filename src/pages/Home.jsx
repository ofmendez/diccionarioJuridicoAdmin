import React, { useEffect, useState } from 'react';
import BarraSuperiorMovil from '@src/components/BarraSuperiorMovil.jsx';
import SeccionEstadisticas from '@src/components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '@src/components/SeccionUsuarios.jsx';
import SeccionTerminos from '@src/components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '@src/components/SeccionPalabraDelDia.jsx';
import { Skeletons } from '@src/components/Skeletons.jsx';
import { loadUsers, loadTerms } from '@src/hooks/LoaderData.jsx';

const Home = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loadingUsrs, setLoadingUsrs] = useState('init');
	useEffect(() => loadUsers({ loadingUsrs, setLoadingUsrs, setUsers }), []);
	const [terms, setTerms] = useState([]);
	const [loadingTerms, setLoadingTerms] = useState('init');
	useEffect(() => loadTerms({ loadingTerms, setLoadingTerms, setTerms }), []);

	return (
		<>
			<div className='ContenidoPagina' id='ContenidoPagina'>
				<BarraSuperiorMovil />
				<SeccionEstadisticas />
				<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
					<div className='ColumnaIzquierdaHome'>
						<Skeletons on={loadingUsrs}>
							<SeccionUsuarios users={users} />
						</Skeletons>
						<Skeletons on={loadingTerms}>
							<SeccionTerminos terms={terms} />
						</Skeletons>
					</div>
					<div className='ColumnaDerechaHome'>
						<Skeletons on={loadingTerms}>
							<SeccionPalabraDelDia terms={terms} />
						</Skeletons>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
