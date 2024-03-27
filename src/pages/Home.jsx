import SeccionEstadisticas from '@components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '@components/SeccionUsuarios.jsx';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '@components/SeccionPalabraDelDia.jsx';
import ContentFrame from '@src/components/ContentFrame';
import { useEffect, useState } from 'react';

const Home = () => {
	const [numberUsers, setNumberUsers] = useState('---');
	const [numberTerms, setNumberTerms] = useState('---');
	useEffect(() => {}, [numberUsers]);

	return (
		<ContentFrame>
			<SeccionEstadisticas numberUsers={numberUsers} numberTerms={numberTerms} />
			<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
				<div className='ColumnaIzquierdaHome'>
					<SeccionUsuarios home setNumberUsers={setNumberUsers} />
					<SeccionTerminos home setNumberTerms={setNumberTerms} />
				</div>
				<div className='ColumnaDerechaHome'>
					<SeccionPalabraDelDia dayTerm />
				</div>
			</div>
		</ContentFrame>
	);
};

export default Home;
