import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MainsSeparator from '@components/MainSeparator.jsx';
import UsersTable from '@components/UsersTable.jsx';
import { Skeletons } from '@components/Skeletons.jsx';
import { loadUsers } from '@src/hooks/LoaderData.jsx';

const SeccionUsuarios = () => {
	const [users, setUsers] = useState([]);
	const [loadingUsrs, setLoadingUsrs] = useState('init');
	useEffect(() => loadUsers({ loadingUsrs, setLoadingUsrs, setUsers }), []);

	return (
		<Skeletons on={loadingUsrs} msg='Cargando'>
			<div className='SeccionSuperiorColumnaIzquierdaHome'>
				<div className='SeccionTituloLink'>
					<h3>Usuarios Recientes</h3>
					<Link to='/users'><p>Ver todos</p></Link>
				</div>
				<MainsSeparator />
				<div className='ContenedorTablaRecientes ScrollVerde'>
					<UsersTable tableClass='TablaRecientes' users={users} />
				</div>
			</div>
		</Skeletons>
	);
};

export default SeccionUsuarios;
