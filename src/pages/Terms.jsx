import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IconoAgTermino, IconoLupa } from '@components/icons.js';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import ContentFrame from '@src/components/ContentFrame.jsx';
import Button from '@src/components/Button.jsx';

const Terms = () => {
	const [expandedRows, setExpandedRows] = useState([]);
	const [inputText, setInputText] = useState('');
	const navigate = useNavigate();
	const termsRef = useRef(null);
	const expandAllRows = () => {
		const terms = termsRef.current?.getTerms();
		const allRows = terms.map(obj => obj._id);
		setExpandedRows(allRows);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`./search?q=${inputText}&content=term%252Cmeanings.descriptor%252Cmeanings.definition%252Cmeanings.source`);
	};

	const collapseAllRows = () => {
		setExpandedRows([]);
	};

	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div className='SeccionBuscador'>
					<form className='FormaBuscador' onSubmit={handleSubmit}>
						<div className='SeccionInputBuscador'>
							<img className='IconoLupa' src={IconoLupa} />
							<input value={inputText} onChange={e => setInputText(e.target.value)} className='InputBuscador' type='text' placeholder='Buscar' name='buscar' />
						</div>
						<Link
							onClick={handleSubmit}
							className={'SubmitBusqueda' + (inputText ? '' : ' noPointerEvents opacity07')}
						>
							BUSCAR
						</Link>
					</form>
				</div>
				<div className='SeccionSuperiorHerramientas'>
					<Button onClick={expandAllRows}><span className='BotonExpandir'>+</span></Button>
					<Button onClick={collapseAllRows}><span className='BotonContraer'>-</span></Button>
					<Link to='./new' className='BotonAgregar'>
						<img className='IconoMenu' src={IconoAgTermino} />
						<span className='BotonAgregarTermino'>Agregar</span>
					</Link>
				</div>
			</div>
			<SeccionTerminos rowsState={{ expandedRows, setExpandedRows }} ref={termsRef} />

		</ContentFrame>
	);
};
export default Terms;
