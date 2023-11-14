import { useState } from 'react';

import { IconoAgregar } from '@components/icons.js';
import TermTopTools from '@components/TermTopTools.jsx';
import FormMeaning from '@components/FormMeaning.jsx';
import Meaning from '@components/Meaning.jsx';
import ContentFrame from '@components/ContentFrame.jsx';
import { createTerm } from '@src/hooks/PostData.jsx';
import OverlayLoading from '@src/components/OverlayLoading';
import { useNavigate } from 'react-router-dom';

const NewTerm = () => {
	const [meanings, setMeanings] = useState([new Meaning()]);
	const [term, setTerm] = useState('');
	const [loadingTerm, setLoadingTerm] = useState('init');
	const navigate = useNavigate();

	const handleDonePost = (d) => {
		navigate(`/Terms/${d.id}`);
		console.log(d);
	};

	const saveTerm = () => {
		const result = Object.entries(meanings).map(([name, value]) => value.inputs);
		const body = { term, meanings: result, created_by: 'Admin' };
		createTerm({ loadingTerm, setLoadingTerm, body, handleDonePost });
	};

	return (
		<>
			<ContentFrame>
				<TermTopTools term={term} onTermChange={(e) => setTerm(e.target.value)} saveTerm={saveTerm} />
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
			{loadingTerm === 'loading' ? <OverlayLoading /> : null}
		</>

	);
};

export default NewTerm;
