import React, { useContext, useEffect, useState } from 'react';
import { IcoInicio, IcoUsuarios, IcoTerminos, IcoDescarga, IcoSpinner, IconoLogout } from '@components/icons.js';
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
	};

	const logout = () => {
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('version');
		window.location.href = '/login';
	};

	return (
		<>
			<div id='ContenedorMenuLateral'>
				<div className='MenuLateral' id='MenuLateral'>
					<div className='MenuLateralSeccion'>
						<a href='/'>
							<img className='LogoMenuLateral' src={LogoBlanco} />
						</a>
						<ul className='MenuLateralLista'>
							<MenuItem to='/' icon={IcoInicio} text='Inicio' />
							{
								window.localStorage.user && JSON.parse(window.localStorage.user).role === 'Administrador' &&
								<MenuItem to='/Users' icon={IcoUsuarios} text='Usuarios' />
							}
							<MenuItem to='/Terms' icon={IcoTerminos} text='Términos' />
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
							<li>
								<button className='ContenedorItemMenuLateral' onClick={logout}>
									<img
										className='IconosMenuLateral'
										src={IconoLogout}
									/>
									Cerrar Sesión
								</button>
							</li>
						</ul>
					</div>
					<div class="IntruccionesAplicativo">
						En cada uno de los términos de este diccionario Usted encontrará primero las <b>NORMAS</b> sobre la materia, organizadas de la más reciente a la más antigua; luego la <b>JURISPRUDENCIA</b> sobre el tema; organizada por años y por último la <b>DOCTRINA</b> de las autoridades (Ministerio de Minas y Energía, Agencia Nacional de Minería, Ministerio de Ambiente y Desarrollo Sostenible).
					</div>
					<div className='MenuLateralSeccion InformacionPropiedadAplicativo'>
						© 2025 Explore Diccionario Jurídico Minero-Energético.
						<br />
						Desarrollado por <a href='https://ricaurteruedaabogados.com/' target='_blank' rel='noreferrer'>Ricaurte Rueda Abogados</a>.
					</div>
				</div>
			</div>
			<div className='OverlayMenu overlay-out' id='OverlayMenu' onClick={switchMenu(false)} />
		</>
	);
};
export default Menu;
