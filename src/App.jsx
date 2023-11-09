import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import { MenuProvider } from '@src/context/MenuContext.jsx';
import Menu from '@src/components/Menu.jsx';
import Terms from '@src/pages/Terms.jsx';
import Users from '@src/pages/Users.jsx';
import NoPage from '@src/pages/404.jsx';
import Home from '@src/pages/Home.jsx';
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
				<Menu />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='Terms' element={<Terms />} />
					<Route path='Users' element={<Users />} />
					<Route path='*' element={<NoPage />} />
				</Routes>
			</MenuProvider>
		</Router>
	);
};

export default App;
