import { IconoGuardar, IconoEliminar } from '@components/icons.js';
import ButtonRound from './ButtonRound';

const TermTopToolsEdit = ({ term, onTermChange, handleUpdate, handleDelete }) => {
	return (
		<div className='SeccionSuperiorHerramientas'>
			<div className='SeccionInputTitulo'>
				<input
					className='InputTermino' type='text' placeholder='Término' name='term'
					value={term} onChange={onTermChange}
				/>
			</div>
			<div className='SeccionDerechaBotones'>
				<ButtonRound ico={IconoEliminar} onClick={handleDelete} />
				<button className='BotonAgregar' onClick={handleUpdate}>
					<img className='IconoMenu' src={IconoGuardar} /> Guardar
				</button>
			</div>
			<div className="BotonGuardarFixed">
			<button className='BotonAgregarFixed' onClick={handleUpdate}>
					<img className='IconoMenu' src={IconoGuardar} />
				</button>
			</div>
		</div>
	);
};

export default TermTopToolsEdit;
