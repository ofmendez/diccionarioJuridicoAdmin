import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useEffect} from "react";

import Home from "./pages/Home";
import NoPage from "./pages/404.jsx";
import Terms from "./pages/Terms.jsx";
import Users from "./pages/Users.jsx";

import { MenuProvider } from "./context/MenuContext.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  return (
    <Router>
			<MenuProvider>	
				<Menu />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="Terms" element={<Terms />}/>
					<Route path="Users" element={<Users />}/>
					<Route path="*" element={<NoPage />} />
				</Routes>
			</MenuProvider>
    </Router>
  );
}

export default App;
