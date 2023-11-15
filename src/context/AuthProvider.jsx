import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
	isAuthenticated: false
});

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();

	const [isAuthenticated, setAuthenticated] = useState(() => {
		const token = window.localStorage.getItem('token');
		return token !== null;
	});
	useEffect(() => {
		console.log('isAuthenticated: ', isAuthenticated);
		if (!isAuthenticated)
			navigate('/login');
	}, [isAuthenticated]);

	const login = () => setAuthenticated(true);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login }}>
			{children}
		</AuthContext.Provider>
	);
};
