import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { loadTerm } from '@src/hooks/LoaderData.jsx';
import { updateTerm, deleteTerm } from '@src/hooks/PostData.jsx';

import { IconoAgregar } from '@components/icons.js';
import ContentFrame from '@components/ContentFrame.jsx';
import TermTopToolsEdit from '@components/TermTopToolsEdit.jsx';
import OverlayLoading from '@components/OverlayLoading.jsx';
import FormMeaning from '@components/FormMeaning.jsx';
import Meaning from '@components/Meaning.jsx';

const EditTerm = () => {
	const [loadingTerm, setLoadingTerm] = useState('init');
	const [term, setTerm] = useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	const homologateTerm = (term) => {
		const hMeanings = term.meanings?.map((el) => (new Meaning()).createFromData(el));
		setTerm({ ...term, meanings: hMeanings });
	};

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm: homologateTerm }); }, []);

	const handleDonePost = (_) => {
		navigate(`/Terms/${id}`);
	};

	const handleUpdate = () => {
		setLoadingTerm('loading');
		const allowed = ['term', 'meanings', 'created_by'];
		console.log(term);
		const newTerm = Object.keys(term).filter(key => allowed.includes(key)).reduce((obj, key) => {
			obj[key] = term[key];
			return obj;
		}, {});
		const result = Object.entries(newTerm.meanings).map(([_, value]) => value.inputs);
		const body = { ...newTerm, term: newTerm.term, meanings: result, updated_by: JSON.parse(window.localStorage.user).name };
		updateTerm({ id, setLoadingTerm, body, handleDonePost });
	};

	const handleDelete = () => {
		window.confirm('¿Estás seguro de eliminar este término?') &&
		deleteTerm({ id, setLoadingTerm, handleDonePost: () => navigate('/terms') });
	};

	return (
		<ContentFrame> {
			loadingTerm === 'ok'
				? (
					<>
						<TermTopToolsEdit term={term.term} handleUpdate={handleUpdate} handleDelete={handleDelete} onTermChange={(e) => setTerm({ ...term, term: e.target.value })} />
						<div className='SeccionContenidoDefiniciones'>
							<button
							  className='ContenidoDefinicion AgregarDefinicion'
  								onClick={() => {
  							  setTerm({ ...term, meanings: [...term.meanings, new Meaning()] });
							    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
							  }}
							>
							  <img className='IconoAgregarDefinicion' src={IconoAgregar} />
							</button>
							{
								term.meanings?.map((el, i) =>
									<FormMeaning edit index={i} key={i} meaning={el} setMeanings={setTerm} />
								)
							}
							<button className='ContenidoDefinicion AgregarDefinicion' onClick={() => setTerm({ ...term, meanings: [...term.meanings, new Meaning()] })}>
								<img className='IconoAgregarDefinicion' src={IconoAgregar} />
							</button>
						</div>
					</>
				)
				: (
					<OverlayLoading word='Cargando' />
				)
		}
		</ContentFrame>

	);
};

export default EditTerm;
