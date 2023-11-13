import { useState } from 'react';
import { IconoAgregar } from '@src/components/icons';
import BarraSuperiorMovil from '@src/components/BarraSuperiorMovil';
import TermTopTools from '@src/components/TermTopTools';
import FormMeaning from '@src/components/FormMeaning';
import Meaning from '@src/components/Meaning.jsx';
import Menu from '@src/components/Menu.jsx';

const NewTerm = () => {
	const [meanings, setMeanings] = useState([new Meaning()]);
	const [term, setTerm] = useState('');

	const saveTerm = () => {
		meanings.forEach((el) => {
			console.log(el);
		});
	};
	return (
		<>
			<Menu />
			<div className='ContenidoPagina' id='ContenidoPagina'>
				<BarraSuperiorMovil />
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
			</div>
		</>
	);
};

export default NewTerm;
