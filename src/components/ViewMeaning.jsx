import React from 'react';

const ViewMeaning = ({ meaning, query }) => {
	const getHLText = (text, highlight) => {
		let parts = '';
		let compare = '';
		if (highlight.startsWith('"') && highlight.endsWith('"')) {
			highlight = highlight.replace(/['"]+/g, '');
			parts = text.split(new RegExp(`(${highlight})`, 'gi'));
			compare = highlight.toLowerCase().trim();
		} else {
			compare = highlight.toLowerCase().trim();
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
		<div className='ContenidoDefinicion'>
			<div className='ContenedorSuperiorDefinicion'>
				<div>
					<p className='InformacionDefinicion'>DESCRIPTOR: {getHLText(meaning.descriptor, query)}</p>
					<p className='InformacionDefinicion'>AÑO: {meaning.year}</p>
					<p className='InformacionDefinicion'>MATERIA: {getHLText(meaning.subject, query)}</p>
				</div>
			</div>
			<div className='SeparadorSecciones' />
			<div className='DefinicionTermino ScrollVerde'>
				<p style={{ whiteSpace: 'pre-wrap' }}>
					{getHLText(meaning.definition, query)}
				</p>
			</div>
			<div className='SeparadorSecciones' />
			<p className='InformacionDefinicion'>FUENTE: {getHLText(meaning.source, query)}</p>
		</div>
	);
};

export default ViewMeaning;
