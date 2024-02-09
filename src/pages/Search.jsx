import { Link } from 'react-router-dom';
import ContentFrame from '@src/components/ContentFrame';
import { IconoLupa } from '@components/icons.js';
import SearchFilters from '@src/components/SearchFilters';
import SearchResults from '@src/components/SearchResults';

const Search = () => {
	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div className='SeccionContenedorBuscador'>
					<div className='SeccionBuscador'>
						<form className='FormaBuscador' action=''>
							<div className='SeccionInputBuscadorCompleto'>
								<img className='IconoLupa' src={IconoLupa} />
								<input className='InputBuscadorCompleto' type='text' placeholder='Buscar' name='buscar' />
							</div>
							<Link to='./search' className='SubmitBusqueda'>
								BUSCAR
							</Link>
						</form>
					</div>
				</div>
			</div>
			<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
				<div className='SeccionContenidoPaginaBuscador'>
					<SearchFilters />
					<SearchResults />
				</div>
			</div>
		</ContentFrame>
	);
};

export default Search;
