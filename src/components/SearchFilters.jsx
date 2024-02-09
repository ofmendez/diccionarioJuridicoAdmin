import { IconoFiltrar } from '@components/icons.js';

const SearchFilters = () => {
	return (
		<>
			<div className='SeccionBotonFiltros'>
				{/* CAMBIAR ANCLAS A BOTONES */}
				<a id='BotonAbrirFiltros'>
					<div className='BotonAgregar'>
						<img className='IconoMenu' src={IconoFiltrar} />
						Filtrar Resultados
					</div>
				</a>
				<a id='BotonCerrarFiltros'>
					<div className='BotonAgregar'>
						<img className='IconoMenu' src={IconoFiltrar} />
						Cerrar Filtros
					</div>
				</a>
			</div>
			<div className='SeccionContenidoBuscadorFiltros' id='SeccionFiltros'>
				<h3>Filtros</h3>
				<br />
				<form action='/action_page.php' className='FormaBuscadorFiltros'>
					<div className='CategoriasBuscador'>
						<h4>Materia</h4>
					</div>
					<input type='checkbox' id='MateriaJurisprudencia' name='MateriaJurisprudencia' value='MateriaJurisprudencia' />
					<label className='LabelBuscadorFiltros'> Jurisprudencia</label>
					<br />
					<input type='checkbox' id='MateriaDoctrina' name='MateriaDoctrina' value='MateriaDoctrina' />
					<label className='LabelBuscadorFiltros'> Doctrina</label>
					<br />
					<input type='checkbox' id='MateriaNorma' name='MateriaNorma' value='MateriaNorma' />
					<label className='LabelBuscadorFiltros'> Norma</label>
					<br />
					<br />
					<div>
						<h4>Sección contenido</h4>
					</div>
					<input type='checkbox' id='SeccionTermino' name='SeccionTermino' value='SeccionTermino' />
					<label className='LabelBuscadorFiltros'> Término</label>
					<br />
					<input type='checkbox' id='SeccionDescriptor' name='SeccionDescriptor' value='SeccionDescriptor' />
					<label className='LabelBuscadorFiltros'> Descriptor</label>
					<br />
					<input type='checkbox' id='SeccionDefinicion' name='SeccionDefinicion' value='SeccionDefinicion' />
					<label className='LabelBuscadorFiltros'> Definición</label>
					<br />
					<input type='checkbox' id='SeccionFuente' name='SeccionFuente' value='SeccionFuente' />
					<label className='LabelBuscadorFiltros'> Fuente</label>
					<br />
					<br />
					<div>
						<input className='SubmitBusquedaFiltros' type='submit' value='FILTRAR' />
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchFilters;
