import React from 'react';
import { IconoEliminar } from '@components/icons.js';

const FormMeaning = ({ ...props }) => {
	const options = ['MATERIA', 'Jurisprudencia', 'Doctrina', 'Norma'];

	const handleChange = (event) => {
		props.meaning.handleChange(event);
		if (props.edit)
			props.setMeanings(term => ({ ...term, meanings: [...term.meanings] }));
		else
			props.setMeanings(prev => [...prev]);
	};

	const hadleDeleteMeaning = () => {
		if (props.edit)
			props.setMeanings(term => ({ ...term, meanings: term.meanings.filter((_, i) => i !== props.index) }));
		else
			props.setMeanings(prev => prev.filter((_, i) => i !== props.index));
	};

	const currMeaning = props.meaning.inputs;
	return (
		<div className='ContenidoDefinicion'>
			<form className='FormaEditarTerminos'>
				<div className='SeccionDescriptorEliminar'>
					{/* -------------------DESCRIPT ------------------------- */}
					<input
						className='InputDescriptor' type='text' placeholder='DESCRIPTOR' name='descriptor'
						value={currMeaning.descriptor || ''} onChange={handleChange}
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
					value={currMeaning.year || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				{/* ------------------- SUBJECT ------------------------- */}
				<select name='subject' value={currMeaning.subject || ''} onChange={handleChange}>
					{
						options.map((el, idd) => <option disabled={idd === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				{/* ------------------- DEFINITION ------------------------- */}
				<textarea
					className='InputDefinicion ScrollVerde' type='text' placeholder='DEFINICIÓN' name='definition'
					value={currMeaning.definition || ''} onChange={handleChange}
				/>
				{/* ------------------- SOURCE ------------------------- */}
				<input
					className='InputFuente' type='text' placeholder='FUENTE' name='source'
					value={currMeaning.source || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				<input
					className='InputFuente' type='text' placeholder='ARCHIVO' name='file'
					value={currMeaning.file || ''} onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default FormMeaning;
