import BarraSuperiorMovil from '@src/components/BarraSuperiorMovil';
import Menu from '@src/components/Menu.jsx';
import { IconoAgregar, IconoEliminar, IconoGuardar } from '@src/components/icons';

const EditTerm = () => {
	const options = ['MATERIA', 'Jurisprudencia', 'Sentencia', 'Norma'];

	return (
		<>
			<Menu />
			<div className='ContenidoPagina' id='ContenidoPagina'>
				<BarraSuperiorMovil />
				<div className='SeccionSuperiorHerramientas'>
					<div className='SeccionInputTitulo'>
						<input className='InputTermino' type='text' placeholder='Término' name='termino' />
					</div>
					<div className='SeccionDerechaBotones'>
						<div className='BotonEliminar'><img className='IconoMenu' src={IconoEliminar} /></div>
						<a href='ViewTerm.html'>
							<div className='BotonAgregar'><img className='IconoMenu' src={IconoGuardar} />Guardar Cambios</div>
						</a>
					</div>
				</div>
				<div className='SeccionContenidoDefiniciones'>
					<div className='ContenidoDefinicion'>
						<form className='FormaEditarTerminos' action='/home.html'>
							<div className='SeccionDescriptorEliminar'>
								<input className='InputDescriptor' type='text' placeholder='DESCRIPTOR' name='descriptor' />
								<div className='BotonEliminarSubtermino'><img className='IconoMenu' src={IconoEliminar} /></div>
							</div>
							<div className='SeparadorSecciones' />
							<div><input className='InputAno' type='number' placeholder='AÑO' name='ano' /></div>
							<div className='SeparadorSecciones' />
							<div>
								<select name='select' className='FiltrosBusqueda' defaultValue={options[0]}>
									{
										options.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
									}
								</select>
							</div>
							<div className='SeparadorSecciones' />
							<div><textarea className='InputDefinicion ScrollVerde' type='text' placeholder='DEFINICIÓN' name='definicion' /></div>
							<div><input className='InputFuente' type='text' placeholder='FUENTE' name='fuente' /></div>
						</form>
					</div>
					<div className='ContenidoDefinicion AgregarDefinicion'>
						<img className='IconoAgregarDefinicion' src={IconoAgregar} />
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTerm;
