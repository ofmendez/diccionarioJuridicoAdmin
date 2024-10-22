import { useContext, useEffect, useState } from 'react';

import { tryLogin } from '@src/hooks/Login.jsx';
import OverlayLoading from '@components/OverlayLoading.jsx';
import { AuthContext } from '@src/context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@components/LoginForm.jsx';

const Login = () => {
	const navigate = useNavigate();
	const [loadingFetch, setLoadingFetch] = useState('init');
	const { isAuthenticated, login } = useContext(AuthContext);

	const handleDoneFetch = (d) => {
		const mod = parseInt(import.meta.env.VITE_DICTIONARY_MODULE);
		if (!d.user.modules.includes(mod)) {
			setLoadingFetch('init');
			return window.alert('No tienes permisos para acceder a esta aplicación, confirma la URL.');
		}
		window.localStorage.setItem('token', d.token);
		window.localStorage.setItem('user', JSON.stringify(d.user));
		window.localStorage.setItem('expire', Date.now() + 6 * 24 * 60 * 60 * 1000);
		console.log('today: ', Date.now(), 'name: ', JSON.parse(window.localStorage.user).name);
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

	useEffect(() => {
		const listener = (event) => {
			if (event.origin === 'https://consulta.diccionarioexplore.com' && event.data === 'requestToken') {
				const token = window.localStorage.getItem('token');
				if (token)
					event.source.postMessage({ authToken: token }, event.origin);
			}
		};

		window.addEventListener('message', listener);

		// Cleanup function (in case you need it)
		return () => {
			window.removeEventListener('message', listener);
		};
	}, []);

	return (
		<>
			<LoginForm handleSubmit={handleSubmit} />
			{loadingFetch === 'loading' ? <OverlayLoading /> : null}
		</>
	);
};

export default Login;
