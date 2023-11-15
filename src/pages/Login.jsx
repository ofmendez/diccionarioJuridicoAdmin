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
			<LoginForm handleSubmit={handleSubmit} />
			{loadingFetch === 'loading' ? <OverlayLoading /> : null}
		</>
	);
};

export default Login;
