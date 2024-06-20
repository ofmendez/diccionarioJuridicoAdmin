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

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm }); }, []);

	function scrollIntoViewAndWait (element) {
		return new Promise(resolve => {
			const elementContainer = document.getElementById('scrolleable');
			console.log('elementContainer:', elementContainer);
			if ('onscrollend' in elementContainer) {
				console.log('Scrolling with event SII');
				elementContainer.addEventListener('scrollend', resolve, { once: true });
				element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
				resolve();
			} else {
				console.log('Scrolling with event NOO');
				element.scrollIntoView({ block: 'center', inline: 'center' });
				resolve();
			}
		});
	}

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

	function printMeanings (sortedMean, _) {
		return sortedMean?.map((m, _) =>
			<ViewMeaning
				meaning={m}
				key={`${m._id}`}
				id={`${m._id}`}
				query={searchParams.get('q')}
			/>);
	}

	const doneDelete = () => {
		navigate('/terms');
	};

	const handleDelete = () => {
		window.confirm('¿Estás seguro de eliminar este término?') &&
		deleteTerm({ id, setLoadingTerm, handleDonePost: doneDelete });
	};

	useEffect(() => {
		const targetId = window.location.hash.slice(1);
		const targetParagraph = document.getElementById(targetId);
		// Check if a target ID exists and the ref is available
		if (targetParagraph && loadingTerm === 'ok') {
			console.log('Scrolling to target');
			scrollIntoViewAndWait(targetParagraph).then(() => {
				console.log('Scroll end');
				targetParagraph.classList.add('highlight');
			});
		}
	}, [loadingTerm]);
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
			<div className='SeccionContenidoDefiniciones' id='scrolleable'>
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
