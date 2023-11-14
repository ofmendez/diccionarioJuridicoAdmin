import React from 'react';
import { IconoEliminar } from '@components/icons.js';

const FormMeaning = ({ ...props }) => {
	const options = ['MATERIA', 'Jurisprudencia', 'Sentencia', 'Norma'];

	const handleChange = (event) => {
		props.meaning.handleChange(event);
		props.setMeanings(prev => [...prev]);
	};

	const hadleDeleteMeaning = () => {
		props.setMeanings(prev => prev.filter((el, i) => i !== props.index));
	};

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
				{/* ------------------- YEAR ------------------------- */}
				<input
					className='InputAno' type='number' placeholder='AÑO' name='year'
					value={props.meaning.inputs.year || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				{/* ------------------- SUBJECT ------------------------- */}
				<select name='subject' value={props.meaning.inputs.subject || ''} onChange={handleChange}>
					{
						options.map((el, idd) => <option disabled={idd === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				{/* ------------------- DEFINITION ------------------------- */}
				<textarea
					className='InputDefinicion ScrollVerde' type='text' placeholder='DEFINICIÓN' name='definition'
					value={props.meaning.inputs.definition || ''} onChange={handleChange}
				/>
				{/* ------------------- SOURCE ------------------------- */}
				<input
					className='InputFuente' type='text' placeholder='FUENTE' name='source'
					value={props.meaning.inputs.source || ''} onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default FormMeaning;
