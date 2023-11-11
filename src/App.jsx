import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import React from 'react';

import { MenuProvider } from '@src/context/MenuContext.jsx';
import Terms from '@src/pages/Terms.jsx';
import Users from '@src/pages/Users.jsx';
import NoPage from '@src/pages/404.jsx';
import Home from '@src/pages/Home.jsx';
import NewTerm from './pages/NewTerm.jsx';
import '@styles/StyleSheet.css';
import '@styles/StyleSheetExtraSmallDevices.css';
import '@styles/StyleSheetSmallDevices.css';
import '@styles/StyleSheetMediumDevices.css';
import '@styles/StyleSheetLargeDevices.css';
import '@styles/StyleSheetExtraLargeDevices.css';

const App = () => {
	return (
		<Router>
			<MenuProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Terms' element={<Outlet />}>
						<Route path='' element={<Terms />} />
						<Route path='new' element={<NewTerm />} />
						<Route path='edit/:id' element={<NewTerm />} />
						<Route path=':id' element={<h1>SOY ID!!</h1>} />
					</Route>
					<Route path='Users' element={<Users />} />
					<Route path='404' element={<NoPage />} />
					<Route path='*' element={<Navigate replace to='/404' />} />
				</Routes>
			</MenuProvider>
		</Router>
	);
};

export default App;
