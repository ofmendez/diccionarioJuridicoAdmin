import React from 'react';
import MainsSeparator from '@components/MainSeparator.jsx';

const SeccionPalabraDelDia = ({ randomTerm }) => {
	console.log('SeccionPalabraDelDia', randomTerm);
	return (
		<div className='SeccionPalabraDelDia'>
			<h3>Palabra del Día</h3>
			<MainsSeparator />
			<div className='ContenidoPalabraDelDia ScrollVerde'>
				<h3>
					{randomTerm.term}
				</h3>
				<div className='SeparadorSecciones' />
				{randomTerm.meanings.map((meaning, i) => (
					<div key={i}>
						<p className='InformacionDefinicion'>DESCRIPTOR: {meaning.descriptor}</p>
						<p className='InformacionDefinicion'>AÑO: {meaning.year}</p>
						<p className='InformacionDefinicion'>MATERIA: {meaning.subject}</p>
						<div className='SeparadorSecciones' />
						<div className='DefinicionTermino ScrollVerde'>
							<p style={{ whiteSpace: 'pre-wrap' }}>
								{meaning.definition}
							</p>
						</div>
						<div className='SeparadorSecciones' />
						<p className='InformacionDefinicion'>FUENTE: {meaning.source}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SeccionPalabraDelDia;
