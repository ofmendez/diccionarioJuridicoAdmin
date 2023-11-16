import { IconoGuardar, IconoEliminar } from '@components/icons.js';

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
				{/* <button className='BotonEliminar' onClick={handleDelete}>
					<img className='IconoMenu' src={IconoEliminar} />
				</button> */}
				<button className='BotonAgregar' onClick={handleUpdate}>
					<img className='IconoMenu' src={IconoGuardar} /> Guardar
				</button>
			</div>
		</div>
	);
};

export default TermTopToolsEdit;
