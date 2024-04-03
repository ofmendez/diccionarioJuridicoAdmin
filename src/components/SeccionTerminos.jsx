import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';

import { Skeletons } from '@components/Skeletons.jsx';
import MainsSeparator from '@components/MainSeparator.jsx';
import TermsTable from '@components/TermsTable.jsx';
import { loadTerms } from '@src/hooks/LoaderData.jsx';

const SeccionTerminos = (props, ref) => {
	const [terms, setTerms] = useState([]);
	const [loadingTerms, setLoadingTerms] = useState('init');
	const [order, setOrder] = useState('asc');
	useEffect(() => loadTerms({ loadingTerms, setLoadingTerms, setTerms }), []);
	useEffect(() => {
		if (props.home) {
			props.setNumberTerms(terms.length);
			props.setRandomTerm(terms[Math.floor(Math.random() * terms.length)]);
		}
	}, [terms]);

	useImperativeHandle(ref, () => ({ getTerms: () => terms }));
	return (
		props.home
			? (
				<Skeletons on={loadingTerms} msg='Cargando'>
					<div className='SeccionInferiorColumnaIzquierdaHome'>
						<div className='SeccionTituloLink'>
							<h3>Palabras Recientes</h3>
							<Link to='/terms'><p>Ver todos</p></Link>
						</div>
						<div className='ContenedorTablaRecientes ScrollVerde'>
							<TermsTable tableClass='TablaRecientes' terms={terms} home />
						</div>
					</div>
				</Skeletons>
			)
			// : props.dayTerm
			// 	? (
			// 		<></>
			// 		// <Skeletons on={loadingTerms} msg='Cargando'>
			// 		// 	<SeccionPalabraDelDia terms={terms} />
			// 		// </Skeletons>
			// 	)
			:	(
				<>
					<MainsSeparator />
					<div className='SelectOrdenarPor'>
						<span>Ordenar por:  </span>
						<select className='SelectOrdenarPor' onChange={(e) => setOrder(e.target.value)}>
							<option value='asc'> De la A a la Z</option>
							<option value='desc'> De la Z a la A</option>
							<option value='recent'> Agregado más reciente</option>
							<option value='oldest'> Agregado más antiguo</option>
						</select>
					</div>
					<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
						<Skeletons on={loadingTerms} msg='Cargando'>

							<div className='SeccionContenidoSubpagina'>
								<MainsSeparator />
								<h3>Términos</h3>
								<MainsSeparator />
								<div className='ContenedorTablaUsuarios ScrollVerde table-container'>
									<TermsTable tableClass='TablaUsuarios' showBy terms={terms} rowsState={props.rowsState} order={order} />
								</div>
							</div>
						</Skeletons>
					</div>
				</>
			)
	);
};

export default forwardRef(SeccionTerminos);
