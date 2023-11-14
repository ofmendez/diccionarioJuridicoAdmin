import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Skeletons } from '@components/Skeletons.jsx';
import SeccionPalabraDelDia from '@components/SeccionPalabraDelDia.jsx';
import MainsSeparator from '@components/MainSeparator.jsx';
import TermsTable from '@components/TermsTable.jsx';
import { loadTerms } from '@src/hooks/LoaderData.jsx';

const SeccionTerminos = ({ home, dayTerm }) => {
	const [terms, setTerms] = useState([]);
	const [loadingTerms, setLoadingTerms] = useState('init');
	useEffect(() => loadTerms({ loadingTerms, setLoadingTerms, setTerms }), []);

	return (
		home
			? (
				<Skeletons on={loadingTerms} msg='Cargando'>
					<div className='SeccionInferiorColumnaIzquierdaHome'>
						<div className='SeccionTituloLink'>
							<h3>Palabras Recientes</h3>
							<Link to='/terms'><p>Ver todos</p></Link>
						</div>
						<MainsSeparator />
						<div className='ContenedorTablaRecientes ScrollVerde'>
							<TermsTable tableClass='TablaRecientes' terms={terms} />
						</div>
					</div>
				</Skeletons>
			)
			: dayTerm
				? (
					<Skeletons on={loadingTerms} msg='Cargando'>
						<SeccionPalabraDelDia terms={terms} />
					</Skeletons>
				)
				:	(
					<div className='SeccionContenidoHome' id='SeccionContenidoHome'>
						<Skeletons on={loadingTerms} msg='Cargando'>
							<div className='SeccionContenidoSubpagina'>
								<h3>Términos</h3>
								<MainsSeparator />
								<div className='ContenedorTablaUsuarios ScrollVerde'>
									<TermsTable tableClass='TablaUsuarios' showBy terms={terms} />
								</div>
							</div>
						</Skeletons>
					</div>
				)
	);
};

export default SeccionTerminos;
