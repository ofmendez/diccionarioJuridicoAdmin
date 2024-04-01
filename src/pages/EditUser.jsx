import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { loadUser } from '@src/hooks/LoaderData.jsx';
import { updateUser, deleteUser } from '@src/hooks/PostData.jsx';

import { IconoCancelar, IconoEliminar, IconoGuardar } from '@components/icons.js';
import ContentFrame from '@components/ContentFrame.jsx';
import OverlayLoading from '@components/OverlayLoading.jsx';
import ButtonRound from '@src/components/ButtonRound';
import FormNewUser from '@src/components/FormNewUser';

const EditUser = () => {
	const [loadingUser, setLoadingUser] = useState('init');
	const [userData, setUserData] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => { loadUser({ id, loadingUser, setLoadingUser, setUserData }); console.log(userData); }, []);

	const handleDonePost = (_) => {
		navigate(`/users/${id}`);
	};

	const update = () => {
		setLoadingUser('loading');
		const allowed = ['_id', 'email', 'name', 'role'];
		const newUser = Object.keys(userData).filter(key => allowed.includes(key)).reduce((obj, key) => {
			obj[key] = userData[key];
			return obj;
		}, {});
		const body = { ...newUser };
		updateUser({ id, setLoadingUser, body, handleDonePost });
	};
	const validations = () => {
		if (!userData.name || userData.name === '' || !userData.email || userData.email === '' || !userData.role || userData.role === '') {
			window.alert('El nombre, el correo y el rol no pueden estar vacíos');
			return false;
		}
		return true;
	};

	const trySave = () => {
		validations() && update();
	};

	const handleCancel = () => {
		window.confirm('¿Estás seguro de cancelar?') && window.history.back();
	};

	const handleDelete = () => {
		window.confirm(`¿Estás seguro de eliminar el usuario ${userData.name}?`) &&
		deleteUser({ id, setLoadingUser, handleDonePost: () => navigate('/users') });
	};
	return (
		<ContentFrame> {
			loadingUser === 'ok'
				? (
					<>
						<div className='SeccionSuperiorHerramientas'>
							<div className='SeccionInputTitulo'>
								<input
									className='InputTermino' type='text' placeholder='Nombre Usuario' name='term'
									value={userData.name || ''}
									onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
								/>
							</div>
							<div className='SeccionDerechaBotones'>
								<ButtonRound ico={IconoCancelar} onClick={handleCancel} />
								<ButtonRound ico={IconoEliminar} onClick={handleDelete} />
								<button className='BotonAgregar' onClick={trySave}>
									<img className='IconoMenu' src={IconoGuardar} /> Guardar
								</button>
							</div>
						</div>
						<div className='SeccionContenidoDefiniciones'>
							<FormNewUser setUserData={setUserData} userData={userData} edit />
						</div>
					</>
				)
				: (
					<OverlayLoading word='En construcción' />
				)
		}
		</ContentFrame>

	);
};

export default EditUser;
