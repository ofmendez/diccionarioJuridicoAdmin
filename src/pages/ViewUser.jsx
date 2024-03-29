import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import ContentFrame from '@components/ContentFrame.jsx';
import { IconoEditar, IconoEliminar } from '@components/icons.js';
import { Skeletons } from '@components/Skeletons.jsx';
import ButtonRound from '@src/components/ButtonRound.jsx';
import { loadUser } from '@src/hooks/LoaderData.jsx';
import { deleteUser } from '@src/hooks/PostData.jsx';
import MainsSeparator from '@src/components/MainSeparator';

const ViewUser = () => {
	const { id } = useParams();
	const [user, setUserData] = useState({});
	const [loadingUser, setLoadingUser] = useState('init');
	const navigate = useNavigate();

	useEffect(() => { loadUser({ id, loadingUser, setLoadingUser, setUserData }); }, []);

	const doneDelete = () => {
		navigate('/users');
	};

	const handleDelete = () => {
		window.confirm(`¿Estás seguro de eliminar al Usuario ${user.name}?`) &&
		deleteUser({ id, setLoadingUser, handleDonePost: doneDelete });
	};

	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas'>
				<Skeletons on={loadingUser} msg='Cargando'>
					<div className='SeccionBuscador'>
						<h1>{user.name}</h1>
						<MainsSeparator />
						<h3>{user.email}</h3>
					</div>
					<div className='SeccionDerechaBotones'>
						<ButtonRound onClick={handleDelete} ico={IconoEliminar} />
						<Link className='BotonAgregar' to={'../edit/' + id}>
							<img className='IconoMenu' src={IconoEditar} />
							Editar Usuario
						</Link>
					</div>
				</Skeletons>
			</div>
		</ContentFrame>
	);
};

export default ViewUser;
