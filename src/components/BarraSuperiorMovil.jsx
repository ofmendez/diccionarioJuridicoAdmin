import React, { useContext } from 'react';
import { MenuContext } from '@src/context/MenuContext.jsx';
import { LogoPositivo } from '@components/img.js';
import { IconoMenu } from '@components/icons.js';
import MainsSeparator from '@components/MainSeparator.jsx';

const BarraSuperiorMovil = () => {
	const { switchMenu } = useContext(MenuContext);

	return (
		<div className='SeccionBarraSuperiorMovil'>
			<div className='SeccionHeader'>
				<div className='SeccionHeaderIzquierda'><a onClick={switchMenu(true)}><img className='IconoMenu' src={IconoMenu} /></a></div>
				<div className='SeccionHeaderDerecha'><img className='LogoPrincipal' src={LogoPositivo} /></div>
			</div>
			<MainsSeparator />
		</div>
	);
};

export default BarraSuperiorMovil;
