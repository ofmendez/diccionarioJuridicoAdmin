import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { createTerm } from '@src/hooks/PostData.jsx';
import { IconoAgregar } from '@components/icons.js';
import OverlayLoading from '@components/OverlayLoading.jsx';
import ContentFrame from '@components/ContentFrame.jsx';
import TermTopToolsNew from '@components/TermTopToolsNew.jsx';
import FormMeaning from '@components/FormMeaning.jsx';
import Meaning from '@components/Meaning.jsx';

const NewTerm = () => {
	const [meanings, setMeanings] = useState([new Meaning()]);
	const [term, setTerm] = useState('');
	const [loadingTerm, setLoadingTerm] = useState('init');
	const navigate = useNavigate();

	const handleDonePost = (d) => {
		navigate(`/Terms/${d.id}`);
		console.log(d);
	};
	const validations = () => {
		if (term === '') {
			window.alert('El término no puede estar vacío');
			return false;
		}
		return true;
	};

	const saveTerm = () => {
		const result = Object.entries(meanings).map(([name, value]) => value.inputs);
		const body = { term, meanings: result, created_by: JSON.parse(window.localStorage.user).name, updated_by: JSON.parse(window.localStorage.user).name };
		createTerm({ loadingTerm, setLoadingTerm, body, handleDonePost });
	};

	const trySave = () => {
		validations() && saveTerm();
	};

	return (
		<>
			<ContentFrame>
				<TermTopToolsNew term={term} onTermChange={(e) => setTerm(e.target.value)} saveTerm={trySave} />
				<div className='SeccionContenidoDefiniciones'>
					{
						meanings.map((el, i) =>
							<FormMeaning index={i} key={i} meaning={el} setMeanings={setMeanings} />
						)
					}
					<button className='ContenidoDefinicion AgregarDefinicion' onClick={() => setMeanings([...meanings, new Meaning()])}>
						<img className='IconoAgregarDefinicion' src={IconoAgregar} />
					</button>
				</div>
			</ContentFrame>
			{loadingTerm === 'loading' ? <OverlayLoading word='Creando' /> : null}
		</>

	);
};

export default NewTerm;
