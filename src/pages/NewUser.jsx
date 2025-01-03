import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '@src/hooks/PostData.jsx';
import OverlayLoading from '@components/OverlayLoading.jsx';
import ContentFrame from '@components/ContentFrame.jsx';
import { IconoGuardar, IconoCancelar } from '@components/icons.js';
import ButtonRound from '@src/components/ButtonRound';
import FormNewUser from '@src/components/FormNewUser';

const NewUser = () => {
	const [userData, setUserData] = useState('');
	const [loadingUser, setLoadingUser] = useState('init');
	const navigate = useNavigate();

	const handleDonePost = (d) => {
		navigate(`/users/${d.id}`);
		console.log(d);
	};
	const validations = () => {
		if (!userData.name || userData.name === '') {
			window.alert('El nombre del usuario no puede estar vacío');
			return false;
		}
		if (!userData.email || userData.email === '') {
			window.alert('El Correo electrónico no puede estar vacío');
			return false;
		}
		if (!userData.password || userData.password === '') {
			window.alert('La contraseña no puede estar vacía');
			return false;
		}
		if (userData.suscription === 'Activo' && (!userData.timeToExpire || !userData.initSuscription)) {
			window.alert('El campo de Expiración ni la fecha de inicio de suscripción pueden estar vacíos');
			return false;
		}
		if (userData.password.length < 8) {
			window.alert('La contraseña debe tener al menos 8 caracteres');
			return false;
		}
		if (!userData.role || userData.role === '') {
			window.alert('El Rol no puede estar vacío');
			return false;
		}
		return true;
	};

	const saveUser = () => {
		const modules = [parseInt(import.meta.env.VITE_DICTIONARY_MODULE)];
		const body = { ...userData, modules: JSON.stringify(modules) };
		createUser({ loadingUser, setLoadingUser, body, handleDonePost });
	};

	const trySave = () => {
		validations() && saveUser();
	};
	const handleCancel = () => {
		window.confirm('¿Estás seguro de cancelar?') && window.history.back();
	};

	return (
		<>
			<ContentFrame>
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
						<button className='BotonAgregar' onClick={trySave}>
							<img className='IconoMenu' src={IconoGuardar} /> Guardar
						</button>
					</div>
				</div>
				<div className='SeccionContenidoDefiniciones'>
					<FormNewUser setUserData={setUserData} userData={userData} />
				</div>
			</ContentFrame>
			{loadingUser === 'loading' ? <OverlayLoading word='Creando' /> : null}
		</>

	);
};

export default NewUser;
