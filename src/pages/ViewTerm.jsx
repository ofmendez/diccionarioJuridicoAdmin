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
	const subjectOrder = ['Norma', 'Jurisprudencia', 'Doctrina', 'MATERIA'];

	const printSortedDescriptors = (meanings, _) => {
		console.log('meanings:', meanings);
		let result = [];
		for (let i = 0; i < subjectOrder.length; i++) {
			const sortedMean = meanings?.filter((m) => m.subject === subjectOrder[i]).sort((a, b) => {
				if (a.year === b.year)
					return a.descriptor.localeCompare(b.descriptor);
				return b.year - a.year;
			});
			result = result.concat(printMeanings(sortedMean, i));
		}
		return result;
	};

	function printMeanings (sortedMean, index) {
		return sortedMean?.map((m, j) => <ViewMeaning meaning={m} key={`0${index}-${j}`} query={searchParams.get('q')} />);
	}

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
						printSortedDescriptors(term.meanings, 0)
						// term.meanings?.map((el, i) => (<ViewMeaning meaning={el} key={i} query={searchParams.get('q')} />))
					}
				</Skeletons>
			</div>
		</ContentFrame>
	);
};

export default ViewTerm;
