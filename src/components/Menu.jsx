import React, { useContext } from 'react';
import {IcoInicio,  IcoUsuarios, IcoTerminos} from "@src/components/icons.js";
import { LogoBlanco }  from "@src/components/img.js";
import { MenuContext } from '@src/context/MenuContext.jsx';
import MenuItem from '@src/components/MenuItem.jsx';

const Menu = () => {
	const { switchMenu } = useContext(MenuContext);
	return (
		<>
			<div id="ContenedorMenuLateral">
				<div className="MenuLateral" id="MenuLateral">
					<div className="MenuLateralSeccion">
						<img className="LogoMenuLateral" src={LogoBlanco} />
						<ul className="MenuLateralLista">
							<MenuItem to="/" icon={IcoInicio} text="Inicio" />
							<MenuItem to="/Users" icon={IcoUsuarios} text="Usuarios"  />
							<MenuItem to="/Terms" icon={IcoTerminos} text="Términos" />
						</ul>
					</div>
					<div className="MenuLateralSeccion InformacionPropiedadAplicativo">
						© 2023 Explore Diccionario Jurídico Minero-Energético.
					</div>
				</div>
			</div>
			<div className="OverlayMenu overlay-out" id="OverlayMenu" onClick={switchMenu(false)}></div>
		</>
	);
} 
export default Menu;
