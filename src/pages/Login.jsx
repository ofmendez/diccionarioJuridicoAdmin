import { useContext, useEffect, useState } from 'react';

import { IconoEmail, IconoPassword } from '@components/icons.js';
import { LogoPositivo } from '@components/img.js';
import { tryLogin } from '@src/hooks/Login.jsx';
import OverlayLoading from '@components/OverlayLoading.jsx';
import { AuthContext } from '@src/context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const [loadingFetch, setLoadingFetch] = useState('init');
	const { isAuthenticated, login } = useContext(AuthContext);
	const handleDoneFetch = (d) => {
		window.localStorage.setItem('token', d.token);
		window.localStorage.setItem('user', d.user);
		login();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const query = Object.fromEntries(new window.FormData(event.target));
		if (query.password.length < 8)
			return window.alert('La contraseña debe tener al menos 8 caracteres');
		tryLogin({ loadingFetch, setLoadingFetch, query, handleDoneFetch });
	};
	useEffect(() => { if (isAuthenticated) navigate('/'); }, [isAuthenticated]);

	return (
		<>
			<div className='ContenidoPagina'>
				<div className='SeccionLogin'>
					<img className='LogoLogin' src={LogoPositivo} />
					<p className='InstruccionLogin'>Inicia sesión como administrador</p>
					<div className='SeparadorSecciones' />
					<form className='FormaLogin' onSubmit={handleSubmit}>
						<div className='FilaLogin FilaLoginInput'><img className='IconosLogin' src={IconoEmail} />
							<input className='InputLogin' type='email' placeholder='Correo electrónico' name='email' />
						</div>
						<div className='FilaLogin FilaLoginInput'><img className='IconosLogin' src={IconoPassword} />
							<input className='InputLogin' type='password' placeholder='Contraseña' name='password' />
						</div>
						<div className='FilaLogin'>
							<button className='SubmitLogin' type='submit'>
								INGRESAR
							</button>
						</div>
					</form>
					<div className='EnlacesLogin'>
						<a href=''>
							<p>¿Olvidaste tu contraseña?</p>
						</a>
					</div>
				</div>
			</div>
			{loadingFetch === 'loading' ? <OverlayLoading /> : null}
		</>
	);
};

export default Login;
