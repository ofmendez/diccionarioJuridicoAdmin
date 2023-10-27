import React, { useContext } from 'react';
import { MenuContext } from '@src/context/MenuContext.jsx';
import { LogoPositivo } from '@src/components/img.js';	
import { IconoMenu } from '@src/components/icons.js';

const BarraSuperiorMovil = () => {
	const { switchMenu } = useContext(MenuContext);

	return (
		<div className="SeccionBarraSuperiorMovil">
			<div className="SeccionHeader">
				<div className="SeccionHeaderIzquierda"><a onClick={switchMenu(true)}><img className="IconoMenu" src={IconoMenu}/></a></div>
				<div className="SeccionHeaderDerecha"><img className="LogoPrincipal" src={LogoPositivo}/></div>
			</div>
			<div className="SeparadorSeccionPrincipal"></div>
		</div>
	);
}

export default BarraSuperiorMovil;
