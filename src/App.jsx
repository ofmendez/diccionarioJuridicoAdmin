import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import React from 'react';

import { MenuProvider } from '@src/context/MenuContext.jsx';
import Terms from '@src/pages/Terms.jsx';
import Users from '@src/pages/Users.jsx';
import NoPage from '@src/pages/404.jsx';
import Home from '@src/pages/Home.jsx';
import NewTerm from '@src/pages/NewTerm.jsx';
import '@styles/StyleSheet.css';
import '@styles/StyleSheetExtraSmallDevices.css';
import '@styles/StyleSheetSmallDevices.css';
import '@styles/StyleSheetMediumDevices.css';
import '@styles/StyleSheetLargeDevices.css';
import '@styles/StyleSheetExtraLargeDevices.css';
import EditTerm from '@src/pages/EditTerm.jsx';
import ViewTerm from '@src/pages/ViewTerm.jsx';
import Login from '@src/pages/Login.jsx';
import { AuthProvider } from './context/AuthProvider';

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<MenuProvider>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/Login' element={<Login />} />
						<Route path='Terms' element={<Outlet />}>
							<Route path='' element={<Terms />} />
							<Route path='new' element={<NewTerm />} />
							<Route path='edit/:id' element={<EditTerm />} />
							<Route path=':id' element={<ViewTerm />} />
						</Route>
						<Route path='Users' element={<Users />} />
						<Route path='404' element={<NoPage />} />
						<Route path='*' element={<Navigate replace to='/404' />} />
					</Routes>
				</MenuProvider>
			</AuthProvider>
		</Router>
	);
};

export default App;
