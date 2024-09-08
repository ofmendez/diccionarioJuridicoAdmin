import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainsSeparator from '@components/MainSeparator.jsx';
import UsersTable from '@components/UsersTable.jsx';
import { Skeletons } from '@components/Skeletons.jsx';
import { loadUsers } from '@src/hooks/LoaderData.jsx';

const SeccionUsuarios = (props) => {
	const [users, setUsers] = useState([]);
	const [loadingUsrs, setLoadingUsrs] = useState('init');
	useEffect(() => loadUsers({ loadingUsrs, setLoadingUsrs, setUsers: setData }), []);
	useEffect(() => {
		if (props.home)
			props.setNumberUsers(users.length);
	}, [users]);

	const setData = (data) => {
		const mod = parseInt(import.meta.env.VITE_DICTIONARY_MODULE);
		setUsers(data.filter(user => {
			const modules = user.modules ? JSON.parse(user.modules) : [0];
			return modules.includes(mod);
		}));
	};

	return (
		props.home
			? (
				<Skeletons on={loadingUsrs} msg='Cargando'>
					<div className='SeccionSuperiorColumnaIzquierdaHome'>
						<div className='SeccionTituloLink'>
							<h3>Usuarios Recientes</h3>
							<Link to='/users'><p>Ver todos</p></Link>
						</div>
						<div className='ContenedorTablaRecientes ScrollVerde'>
							<UsersTable tableClass='TablaRecientes' users={users} />
						</div>
					</div>
				</Skeletons>
			)
			: (
				<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
					<Skeletons on={loadingUsrs} msg='Cargando'>
						<div className='SeccionContenidoSubpagina'>
							<h3>Usuarios</h3>
							<MainsSeparator />
							<div className='ContenedorTablaUsuarios ScrollVerde table-container'>
								<UsersTable tableClass='TablaUsuarios' users={users} />
							</div>
						</div>
					</Skeletons>
				</div>
			)
	);
};

export default SeccionUsuarios;
