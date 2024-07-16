import SeccionEstadisticas from '@components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '@components/SeccionUsuarios.jsx';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '@components/SeccionPalabraDelDia.jsx';
import ContentFrame from '@src/components/ContentFrame';
import { useEffect, useState } from 'react';

const Home = () => {
	const [numberUsers, setNumberUsers] = useState('---');
	const [numberTerms, setNumberTerms] = useState('---');
	const [randomTerm, setRandomTerm] = useState(null);
	useEffect(() => {}, [numberUsers]);

	return (
		<ContentFrame>
			<SeccionEstadisticas numberUsers={numberUsers} numberTerms={numberTerms} />
			<div className='SeccionContenidoPaginaInicial' id='SeccionContenidoHome'>
				<div className='ColumnaIzquierdaHome'>
					{
						window.localStorage.user && JSON.parse(window.localStorage.user).role === 'Administrador' &&
						<SeccionUsuarios home setNumberUsers={setNumberUsers} />
					}
					<SeccionTerminos home setNumberTerms={setNumberTerms} setRandomTerm={setRandomTerm} />
				</div>
				<div className='ColumnaDerechaHome'>
					{randomTerm && <SeccionPalabraDelDia dayTerm randomTerm={randomTerm} />}
				</div>
			</div>
		</ContentFrame>
	);
};

export default Home;
