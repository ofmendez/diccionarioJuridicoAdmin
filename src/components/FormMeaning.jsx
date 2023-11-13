import { IconoEliminar } from '@src/components/icons';
import React from 'react';

const FormMeaning = ({ ...props }) => {
	const options = ['MATERIA', 'Jurisprudencia', 'Sentencia', 'Norma'];

	const handleChange = (event) => {
		props.meaning.handleChange(event);
		props.setMeanings(prev => [...prev]);
	};

	const hadleDeleteMeaning = () => {
		props.setMeanings(prev => prev.filter((el, i) => i !== props.index));
	};

	console.log('index:', props.index);
	return (
		<div className='ContenidoDefinicion'>
			<form className='FormaEditarTerminos'>
				<div className='SeccionDescriptorEliminar'>
					{/* -------------------DESCRIPT ------------------------- */}
					<input
						className='InputDescriptor' type='text' placeholder='DESCRIPTOR' name='descriptor'
						value={props.meaning.inputs.descriptor || ''} onChange={handleChange}
					/>
					{/* ------------------- 🗑️ DELETE ------------------------- */}
					<button className='BotonEliminarSubtermino' onClick={hadleDeleteMeaning} type='button'>
						<img className='IconoMenu' src={IconoEliminar} />
					</button>
				</div>
				<div className='SeparadorSecciones' />

				<div>
					{/* ------------------- YEAR ------------------------- */}
					<input
						className='InputAno' type='number' placeholder='AÑO' name='year'
						value={props.meaning.inputs.year || ''} onChange={handleChange}
					/>
				</div>
				<div className='SeparadorSecciones' />

				<div>
					{/* ------------------- SUBJECT ------------------------- */}
					<select
						name='subject' className='FiltrosBusqueda'
						value={props.meaning.inputs.subject || ''} onChange={handleChange}
					>
						{
							options.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
						}
					</select>
				</div>
				<div className='SeparadorSecciones' />

				<div>
					{/* ------------------- DEFINITION ------------------------- */}
					<textarea
						className='InputDefinicion ScrollVerde' type='text' placeholder='DEFINICIÓN' name='definition'
						value={props.meaning.inputs.definition || ''} onChange={handleChange}
					/>
				</div>
				<div>
					{/* ------------------- SOURCE ------------------------- */}
					<input
						className='InputFuente' type='text' placeholder='FUENTE' name='source'
						value={props.meaning.inputs.source || ''} onChange={handleChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default FormMeaning;
