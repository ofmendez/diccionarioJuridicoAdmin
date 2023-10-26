import React, { useContext } from 'react';
import { MenuContext } from '../context/MenuContext.jsx';

const BarraSuperiorMovil = () => {
	const { switchMenu } = useContext(MenuContext);

	return (
		<div className="SeccionBarraSuperiorMovil">
			<div className="SeccionHeader">
				<div className="SeccionHeaderIzquierda"><a onClick={switchMenu(true)}><img className="IconoMenu" src="/Images/Icons/Menu.svg"/></a></div>
				<div className="SeccionHeaderDerecha"><img className="LogoPrincipal" src="/Images/LogoPositivo.svg"/></div>
			</div>
			<div className="SeparadorSeccionPrincipal"></div>
		</div>
	);
}

export default BarraSuperiorMovil;
