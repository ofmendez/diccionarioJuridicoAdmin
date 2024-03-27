import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import React from 'react';

import { MenuProvider } from '@src/context/MenuContext.jsx';
import { AuthProvider } from '@src/context/AuthProvider.jsx';
import PrivateRoute from '@src/context/PrivateRoute.jsx';

import { Terms, Users, NoPage, Home, NewTerm, NewUser, EditTerm, EditUser, ViewTerm, ViewUser, Login, Search } from '@src/pages/PagesImport.jsx';
import '@styles/main-styles.css';

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<MenuProvider>
					<Routes>
						<Route path='login' element={<Login />} />
						<Route path='' element={<PrivateRoute />}>
							<Route index element={<Home />} />
							<Route path='terms' element={<Outlet />}>
								<Route index element={<Terms />} />
								<Route path='new' element={<NewTerm />} />
								<Route path='search' element={<Search />} />
								<Route path='edit/:id' element={<EditTerm />} />
								<Route path=':id' element={<ViewTerm />} />
							</Route>
							<Route path='users' element={<Outlet />}>
								<Route index element={<Users />} />
								<Route path='new' element={<NewUser />} />
								<Route path='edit/:id' element={<EditUser />} />
								<Route path=':id' element={<ViewUser />} />
							</Route>
							<Route path='*' element={<NoPage />} />
						</Route>
					</Routes>
				</MenuProvider>
			</AuthProvider>
		</Router>
	);
};

export default App;
