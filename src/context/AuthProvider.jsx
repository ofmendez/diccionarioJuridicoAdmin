import { createContext, useState } from 'react';

export const AuthContext = createContext({
	isAuthenticated: false
});

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setAuthenticated] = useState(() => {
		const expire = window.localStorage.expire ? window.localStorage.expire < Date.now() : false;
		if (expire)
			window.localStorage.clear();
		return !!window.localStorage.token && !expire;
	});

	const login = () => setAuthenticated(true);

	return (
		<AuthContext.Provider value={{ login, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
