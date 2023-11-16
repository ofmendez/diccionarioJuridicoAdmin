import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { loadTerm } from '@src/hooks/LoaderData.jsx';
import { updateTerm } from '@src/hooks/PostData.jsx';

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
		const hMeanings = term.meanings.map((el) => (new Meaning()).createFromData(el));
		setTerm({ ...term, meanings: hMeanings });
	};

	useEffect(() => { loadTerm({ id, loadingTerm, setLoadingTerm, setTerm: homologateTerm }); }, []);

	const handleDonePost = (d) => {
		navigate(`/Terms/${id}`);
	};

	const handleUpdate = () => {
		setLoadingTerm('loading');
		const result = Object.entries(term.meanings).map(([name, value]) => value.inputs);
		const body = { term: term.term, meanings: result, created_by: term.created_by };
		updateTerm({ id, setLoadingTerm, body, handleDonePost });
	};
	const handleDelete = () => {
		console.log('delete');
	};
	// console.log(term);

	return (
		<ContentFrame> {
			loadingTerm === 'ok'
				? (
					<>
						<TermTopToolsEdit term={term.term} handleUpdate={handleUpdate} handleDelete={handleDelete} onTermChange={(e) => setTerm({ ...term, term: e.target.value })} />
						<div className='SeccionContenidoDefiniciones'>
							{
								term.meanings.map((el, i) =>
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
					<OverlayLoading />
				)
		}
		</ContentFrame>

	);
};

export default EditTerm;
