import React from 'react';
import MainsSeparator from '@components/MainSeparator.jsx';

const SeccionPalabraDelDia = ({ randomTerm }) => {
	console.log('SeccionPalabraDelDia', randomTerm);
	return (
		<div className='SeccionPalabraDelDia'>
			<h3>Palabra del Día</h3>
			<div className='ContenidoPalabraDelDia ScrollVerde'>
				<h2>
					{randomTerm.term}
				</h2>
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
