import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ContentFrame from '@components/ContentFrame.jsx';
import { IconoEditar } from '@components/icons.js';
import { loadTerm } from '@src/hooks/LoaderData.jsx';
import ViewMeaning from '@components/ViewMeaning.jsx';
import { Skeletons } from '@components/Skeletons.jsx';

const ViewTerm = () => {
	const { id } = useParams();
	const [term, setTerm] = useState({});
	const [loadingTerm, setLoadingTerm] = useState('init');

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm }); }, []);

	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas'>
				<Skeletons on={loadingTerm} msg='Cargando'>
					<div className='SeccionBuscador'>
						<h1>{term.term}</h1>
					</div>
					<div className='SeccionDerechaBotones'>
						<Link to='./edit' disabled onClick={(event) => event.preventDefault()}>
							{/* <button className='BotonAgregar'> */}
							<button className='ButtonDisabled'>
								<img className='IconoMenu' src={IconoEditar} />
								Editar Término
							</button>
						</Link>
					</div>
				</Skeletons>
			</div>
			<div className='SeccionContenidoDefiniciones'>
				<Skeletons on={loadingTerm}>
					{
						term.meanings?.map((el, i) => (<ViewMeaning meaning={el} key={i} />))
					}
				</Skeletons>
			</div>
		</ContentFrame>
	);
};

export default ViewTerm;
