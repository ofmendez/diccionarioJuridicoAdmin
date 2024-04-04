import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import ContentFrame from '@components/ContentFrame.jsx';
import { IconoEditar, IconoEliminar } from '@components/icons.js';
import { loadTerm } from '@src/hooks/LoaderData.jsx';
import ViewMeaning from '@components/ViewMeaning.jsx';
import { Skeletons } from '@components/Skeletons.jsx';
import ButtonRound from '@src/components/ButtonRound.jsx';
import { deleteTerm } from '@src/hooks/PostData.jsx';

const ViewTerm = () => {
	const { id } = useParams();
	const [searchParams] = useSearchParams();
	const [term, setTerm] = useState({});
	const [loadingTerm, setLoadingTerm] = useState('init');
	const navigate = useNavigate();
	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm }); }, []);

	const doneDelete = () => {
		navigate('/terms');
	};

	const handleDelete = () => {
		window.confirm('¿Estás seguro de eliminar este término?') &&
		deleteTerm({ id, setLoadingTerm, handleDonePost: doneDelete });
	};

	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas'>
				<Skeletons on={loadingTerm} msg='Cargando'>
					<div className='SeccionBuscador NombreTermino'>
						<h1>{term.term}</h1>
					</div>
					<div className='SeccionDerechaBotones'>
						<ButtonRound onClick={handleDelete} ico={IconoEliminar} />
						<Link className='BotonAgregar' to={'../edit/' + id}>
							<img className='IconoMenu' src={IconoEditar} />
							Editar
						</Link>
					</div>
				</Skeletons>
			</div>
			<div className='SeccionContenidoDefiniciones'>
				<Skeletons on={loadingTerm}>
					{
						term.meanings?.map((el, i) => (<ViewMeaning meaning={el} key={i} query={searchParams.get('q')} />))
					}
				</Skeletons>
			</div>
		</ContentFrame>
	);
};

export default ViewTerm;
