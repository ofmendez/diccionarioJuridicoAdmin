import { Outlet } from 'react-router-dom';

import BarraSuperiorMovil from '@components/BarraSuperiorMovil.jsx';
import Menu from '@components/Menu.jsx';

const ContentFrame = ({ children }) => {
	return (
		<>
			<Menu />
			<div className='ContenidoPagina' id='ContenidoPagina'>
				<BarraSuperiorMovil />
				{children}
			</div>
		</>
	);
};

export default ContentFrame;
