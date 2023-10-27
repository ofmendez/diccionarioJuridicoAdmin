import React, {useEffect, createContext} from 'react';
import reziseContent, { abrirMenu, cerrarMenu }	from "@src/js/menuCtrl.js";

export const MenuContext = createContext();


export const MenuProvider = ({ children }) => {

	const switchMenu = (value)=>() => {
		if (value) {
			abrirMenu();
		} else {
			cerrarMenu();
		}
	}

	useEffect(() => {
		window.addEventListener("resize", reziseContent);
		reziseContent();
		return () => window.removeEventListener("resize", reziseContent);
	}, [window.innerWidth]);


	return (
		<MenuContext.Provider value={{ switchMenu }}>
			{children}
		</MenuContext.Provider>
	)
}
