const SearchResults = () => {
	return (
		<div className='SeccionContenidoBuscadorResultados'>
			<h3>Resultados</h3>
			<br />
			<div className='ResultadoBusqueda'>
				<p className='ResultadoBusquedaTermino'>
					<mark>Acciones judiciales</mark>
					de asuntos mineros y ambientales
				</p>
			</div>
			<hr className='ResultadoBusquedaSeparador' /> {/* ---- SEPARADOR ------ */}
			<div className='ResultadoBusqueda'>
				<p className='ResultadoBusquedaDescriptor'>
					Conciliación extrajudicial no obligatoria frente a pretensiones no económicas.
				</p>
				<p className='ResultadoBusquedaAno'>
					2016
				</p>
				<p className='ResultadoBusquedaDefinicion'>
					...demandante radica solamente en continuar con el trámite de legalización de explotaciones mineras iniciado ante la <mark>entidad demandada</mark>, a fin de seguir desarrollando la actividad de minería tradicional. Bajo ese entendido, considera...
				</p>
				<p className='ResultadoBusquedaFuente'>
					Sentencia del 22 de abril de 2016. Exp.54489, Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Tercera, C. P.: RAMIRO DE JESÚS PAZOS GUERRERO.
				</p>
			</div>
			<hr className='ResultadoBusquedaSeparador' /> {/* ---- SEPARADOR ------ */}
			<div className='ResultadoBusqueda'>
				<p className='ResultadoBusquedaDescriptor'>
					Conciliación extrajudicial no obligatoria frente a pretensiones no económicas.
				</p>
				<p className='ResultadoBusquedaAno'>
					2016
				</p>
				<p className='ResultadoBusquedaDefinicion'>
					...demandante radica solamente en continuar con el trámite de legalización de
					<mark>explotaciones mineras</mark>
					iniciado ante la entidad demandada, a fin de seguir desarrollando la actividad de minería tradicional. Bajo ese entendido, considera...
				</p>
				<p className='ResultadoBusquedaFuente'>
					Sentencia del 22 de abril de 2016. Exp.54489, Consejo de Estado, Sala de lo Contencioso Administrativo, Sección Tercera, C. P.: RAMIRO DE JESÚS PAZOS GUERRERO.
				</p>
			</div>
		</div>
	);
};

export default SearchResults;
