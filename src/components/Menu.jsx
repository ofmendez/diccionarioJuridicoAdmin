import React, { useContext, useEffect, useState } from 'react';
import { IcoInicio, IcoUsuarios, IcoTerminos, IcoDescarga, IcoSpinner } from '@components/icons.js';
import { LogoBlanco } from '@components/img.js';
import { MenuContext } from '@src/context/MenuContext.jsx';
import MenuItem from '@components/MenuItem.jsx';
import reziseContent from '@src/js/menuCtrl.js';
import { fetchAll } from '@src/hooks/LoaderData.jsx';
import '@styles/Loading.css';

const Menu = () => {
	const { switchMenu } = useContext(MenuContext);
	const [loadingDownload, setLoadingDownload] = useState('init');

	useEffect(() => {
		window.addEventListener('resize', reziseContent);
		setTimeout(() => reziseContent(), 0);
		// reziseContent();
		return () => window.removeEventListener('resize', reziseContent);
	}, [window.innerWidth]);

	const handleDownload = () => {
		fetchAll({ loadingDownload, setLoadingDownload }).then((blob) => {
			console.log(blob);
		}).finally(() => setLoadingDownload('done'));
		// const downloadUrl = 'http://localhost:8080/download-terms'; // Replace with your Hono endpoint
	};

	return (
		<>
			<div id='ContenedorMenuLateral'>
				<div className='MenuLateral' id='MenuLateral'>
					<div className='MenuLateralSeccion'>
						<img className='LogoMenuLateral' src={LogoBlanco} />
						<ul className='MenuLateralLista'>
							<MenuItem to='/' icon={IcoInicio} text='Inicio' />
							{
								window.localStorage.user && JSON.parse(window.localStorage.user).role === 'Administrador' &&
								<MenuItem to='/Users' icon={IcoUsuarios} text='Usuarios' />
							}
							<MenuItem to='/Terms' icon={IcoTerminos} text='Términos' />
							{/* Solamente se muestra si el usuario es administrador */}
							{
								window.localStorage.user && JSON.parse(window.localStorage.user).role === 'Administrador' &&
								<li>
									<button className={`ContenedorItemMenuLateral ${loadingDownload === 'loading' ? 'noPointerEvents loading' : ''}`} onClick={handleDownload}>
										<img
											className={`IconosMenuLateral ${loadingDownload === 'loading' ? 'spinner' : ''}`}
											src={loadingDownload === 'loading' ? IcoSpinner : IcoDescarga}
										/>
										Descarga
									</button>
								</li>
							}
						</ul>
					</div>
					<div className='MenuLateralSeccion InformacionPropiedadAplicativo'>
						© 2024 Explore Diccionario Jurídico Minero-Energético.
					</div>
				</div>
			</div>
			<div className='OverlayMenu overlay-out' id='OverlayMenu' onClick={switchMenu(false)} />
		</>
	);
};
export default Menu;
