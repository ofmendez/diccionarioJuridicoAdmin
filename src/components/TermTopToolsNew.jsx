import { IconoGuardar, IconoCancelar } from '@components/icons.js';
import ButtonRound from '@src/components/ButtonRound';

const TermTopToolsNew = ({ term, onTermChange, saveTerm }) => {
	const handleCancel = () => {
		window.confirm('¿Estás seguro de cancelar?') && window.history.back();
	};

	return (
		<div className='SeccionSuperiorHerramientas'>
			<div className='SeccionInputTitulo'>
				<input
					className='InputTermino' type='text' placeholder='Término' name='term'
					value={term} onChange={onTermChange}
				/>
			</div>
			<div className='SeccionDerechaBotones'>
				<ButtonRound ico={IconoCancelar} onClick={handleCancel} />
				<button className='BotonAgregar' onClick={saveTerm}>
					<img className='IconoMenu' src={IconoGuardar} /> Guardar
				</button>
			</div>
		</div>
	);
};

export default TermTopToolsNew;
