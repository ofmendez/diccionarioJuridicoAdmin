import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeletons } from '@components/Skeletons.jsx';
import MainsSeparator from '@components/MainSeparator.jsx';
import TermsTable from '@components/TermsTable.jsx';
import { loadTerms } from '@src/hooks/LoaderData.jsx';
import TermsFilters from '@components/TermsFilters.jsx';

const SeccionTerminos = (props, ref) => {
	const [terms, setTerms] = useState([]);
	const [loadingTerms, setLoadingTerms] = useState('init');
	const [order, setOrder] = useState('asc');
	const [avSubjects, setAvSubjects] = useState({ Jurisprudencia: true, Doctrina: true, Norma: true });

	// const hasSubject = (attr) => decodeURIComponent(searchParams.get('subject')).split(',').includes(attr);

	// const [searchParams] = useSearchParams();
	// const subjects = useRef({
	// 	Jurisprudencia: true,
	// 	Doctrina: true,
	// 	Norma: true
	// });

	useEffect(() => loadTerms({ loadingTerms, setLoadingTerms, setTerms }), []);
	useEffect(() => {
		if (props.home) {
			const acc = terms.reduce((acc, term) => acc + term.meanings.length, 0);
			const lmDate = terms.reduce((acc, term) => {
				const date = new Date(term.updated_at);
				return date > acc ? date : acc;
			}, new Date(0));
			props.setNumberTerms(acc);
			const last10terms = terms.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 10);
			props.setRandomTerm(last10terms[Math.floor(Math.random() * last10terms.length)]);
			props.setLastModified(lmDate.getFullYear() === new Date(0).getFullYear() ? '--/--/----' : lmDate.toLocaleDateString('es-CO'));
		}
	}, [terms]);

	useImperativeHandle(ref, () => ({ getTerms: () => terms }));
	return (
		props.home/* Vista de Home */
			? (
				<Skeletons on={loadingTerms} msg='Cargando'>
					<div className='SeccionInferiorColumnaIzquierdaHome'>
						<div className='SeccionTituloLink'>
							<h3>Palabras Recientes</h3>
							<Link to='/terms'><p>Ver todos</p></Link>
						</div>
						<div className='ContenedorTablaRecientes ScrollVerde'>
							<TermsTable
								tableClass='TablaRecientes'
								terms={terms.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 10)}
								home
							/>
						</div>
					</div>
				</Skeletons>
			)
			:	(/* Vista de Términos */
				<>
					<MainsSeparator />
					<div className='SelectOrdenarPor'>
						<span>Ordenar por:  </span>
						<select className='SelectOrdenarPor' onChange={(e) => setOrder(e.target.value)}>
							<option value='asc'> De la A a la Z</option>
							<option value='desc'> De la Z a la A</option>
							<option value='recent'> Fecha publicación más reciente </option>
							<option value='oldest'> Fecha publicación más antigua </option>
							<option value='recentMod'> Fecha modificación más reciente </option>
							<option value='oldestMod'> Fecha modificación más antigua </option>
						</select>
					</div>
					<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
						{/* Conectar <TermsFilters> con <TermsTable> */}
						<TermsFilters setAvSubjects={setAvSubjects} avSubjects={avSubjects} />
						<Skeletons on={loadingTerms} msg='Cargando'>
							<div className='SeccionContenidoSubpagina'>
								<h3>Términos</h3>
								<div className='ContenedorTablaUsuarios ScrollVerde table-container'>
									<TermsTable
										tableClass='TablaUsuarios' showBy
										terms={terms}
										rowsState={props.rowsState}
										order={order}
										avSubjects={avSubjects}
									/>
								</div>
							</div>
						</Skeletons>
					</div>
				</>
			)
	);
};

export default forwardRef(SeccionTerminos);
