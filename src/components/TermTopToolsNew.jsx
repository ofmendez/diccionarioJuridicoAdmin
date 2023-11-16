import { IconoGuardar, IconoCancelar } from '@components/icons.js';
import { Link } from 'react-router-dom';
const TermTopToolsNew = ({ term, onTermChange, saveTerm }) => {
	return (
		<div className='SeccionSuperiorHerramientas'>
			<div className='SeccionInputTitulo'>
				<input
					className='InputTermino' type='text' placeholder='Término' name='term'
					value={term} onChange={onTermChange}
				/>
			</div>
			<div className='SeccionDerechaBotones'>
				<Link className='BotonEliminar' to={-1}>
					<img className='IconoMenu' src={IconoCancelar} />
				</Link>
				<button className='BotonAgregar' onClick={saveTerm}>
					<img className='IconoMenu' src={IconoGuardar} /> Guardar
				</button>
			</div>
		</div>
	);
};

export default TermTopToolsNew;
