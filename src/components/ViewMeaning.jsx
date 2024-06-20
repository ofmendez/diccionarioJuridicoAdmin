import React from 'react';

const ViewMeaning = ({ meaning, query, id }) => {
	const getHLText = (text) => {
		if (!query || query === '') return text;
		let parts = '';
		let compare = '';
		if (query.startsWith('"') && query.endsWith('"')) {
			query = query.replace(/['"]+/g, '');
			parts = text.split(new RegExp(`(${query})`, 'gi'));
			compare = query.toLowerCase().trim();
		} else {
			compare = query.toLowerCase().trim();
			parts = text.split(' ');
		}
		return (
			// <span> {text} </span>
			<span> {parts.map((part, i) =>
				part.toLowerCase().trim().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').localeCompare(compare, 'en', { sensitivity: 'base' }) === 0
					? <mark key={i}>{part}</mark>
					: <React.Fragment key={i}>{part} </React.Fragment>)}
			</span>
		);
	};
	return (
		<div className='ContenidoDefinicion' id={id}>
			<div className='ContenedorSuperiorDefinicion'>
				<div>
					<p className='InformacionDefinicion'>DESCRIPTOR: {getHLText(meaning.descriptor)}</p>
					<p className='InformacionDefinicion'>AÑO: {meaning.year}</p>
					<p className='InformacionDefinicion'>MATERIA: {getHLText(meaning.subject)}</p>
				</div>
			</div>
			<div className='SeparadorSecciones' />
			<div className='DefinicionTermino ScrollVerde'>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					{getHLText(meaning.definition)}
				</p>
			</div>
			<div className='SeparadorSecciones' />
			<p className='InformacionDefinicion'>FUENTE: {getHLText(meaning.source)}</p>
		</div>
	);
};

export default ViewMeaning;
