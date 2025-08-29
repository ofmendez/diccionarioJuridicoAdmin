import SearchResultElement from './SearchResultElement.jsx';

const SearchResults = ({ results, query }) => {
	console.log('SearchResults', results);
	const types = {
		'meanings.definition': '',
		'meanings.descriptor': 'DESCRIPTOR: ',
		'meanings.source': 'FUENTE: '
	};
	return (
		<div className='SeccionContenidoBuscadorResultados'>
			<h3>Resultados</h3>
			{results.length === 0 && <><br /><p>No se encontraron resultados</p></>}
			<br />
			{results.map((r, i) =>
				<div key={i}>
					<SearchResultElement r={r} />
					{/* <Link to={`/terms/${r._id}?q=${query}`} className='ResultadoBusqueda'>
						<div className='ResultadoBusqueda hovered'>
							<p className='ResultadoBusquedaTermino'>
								TERMINO: {r.term}
							</p>
							<p className='ResultadoBusqueda'>
								<span className='ResultadoBusquedaTermino'>
									{
										types[r.highlights.reduce((max, tmp) => max.score > tmp.score ? max : tmp).path]
									}
								</span>
								{
									r.highlights.reduce((max, tmp) => max.score > tmp.score ? max : tmp).texts.map((t, i) => {
										if (t.type === 'text')
											return <span key={i}> {t.value}</span>;
										else
											return <mark key={i}> {t.value} </mark>;
									})
								}
							</p>
						</div>
					</Link> */}
					<hr className='ResultadoBusquedaSeparador' />
				</div>
			)}
		</div>
	);
};

export default SearchResults;
