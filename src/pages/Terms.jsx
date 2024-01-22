import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { IconoAgTermino, IconoLupa } from '@components/icons.js';
import SeccionTerminos from '@components/SeccionTerminos.jsx';
import ContentFrame from '@src/components/ContentFrame.jsx';
import Button from '@src/components/Button.jsx';

const Terms = () => {
	const [expandedRows, setExpandedRows] = useState([]);
	const termsRef = useRef(null);
	const expandAllRows = () => {
		const terms = termsRef.current?.getTerms();
		const allRows = terms.map(obj => obj._id);
		setExpandedRows(allRows);
	};

	const collapseAllRows = () => {
		setExpandedRows([]);
	};
	return (
		<ContentFrame>
			<div className='SeccionSuperiorHerramientas' id='SeccionMensajeEstadisticas'>
				<div className='SeccionBuscador'>
					<form className='FormaBuscador' action=''>
						<div className='SeccionInputBuscador'>
							<img className='IconoLupa' src={IconoLupa} />
							<input className='InputBuscador' type='text' placeholder='Buscar' name='buscar' />
						</div>
						<button className='SubmitBusqueda' type='submit' value='BUSCAR'>
							BUSCAR
						</button>
					</form>
				</div>
				<div className='SeccionSuperiorHerramientas'>
					<Button onClick={expandAllRows}>+ Expandir todos</Button>
					<Button onClick={collapseAllRows}>- Contraer todos</Button>
					<Link to='./new' className='BotonAgregar'>
						<img className='IconoMenu' src={IconoAgTermino} />
						Agregar Término
					</Link>
				</div>
			</div>
			<SeccionTerminos rowsState={{ expandedRows, setExpandedRows }} ref={termsRef} />

		</ContentFrame>
	);
};
export default Terms;
