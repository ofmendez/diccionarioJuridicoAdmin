import { IconoGuardar, IconoCancelar } from '@src/components/icons';
const TermTopTools = ({ term, onTermChange, saveTerm }) => {
	return (
		<div className='SeccionSuperiorHerramientas'>
			<div className='SeccionInputTitulo'>
				<input
					className='InputTermino' type='text' placeholder='Término' name='term'
					value={term} onChange={onTermChange}
				/>
			</div>
			<div className='SeccionDerechaBotones'>
				<button className='BotonEliminar'>
					<img className='IconoMenu' src={IconoCancelar} />
				</button>
				<button className='BotonAgregar' onClick={saveTerm}>
					<img className='IconoMenu' src={IconoGuardar} /> Guardar
				</button>
			</div>
		</div>
	);
};

export default TermTopTools;
