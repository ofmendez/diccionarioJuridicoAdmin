import SeccionEstadisticas from '@components/SeccionEstadisticas.jsx';
import SeccionUsuarios from '@components/SeccionUsuarios.jsx';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import SeccionPalabraDelDia from '@components/SeccionPalabraDelDia.jsx';
import ContentFrame from '@src/components/ContentFrame';

const Home = () => {
	return (
		<ContentFrame>
			<SeccionEstadisticas />
			<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
				<div className='ColumnaIzquierdaHome'>
					<SeccionUsuarios home />
					<SeccionTerminos home />
				</div>
				<div className='ColumnaDerechaHome'>
					<SeccionPalabraDelDia dayTerm />
				</div>
			</div>
		</ContentFrame>
	);
};

export default Home;
