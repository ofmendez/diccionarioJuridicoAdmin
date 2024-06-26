import { Link } from 'react-router-dom';

import { IconoEditar, IconoVer } from '@components/icons.js';
import TermInnerRow from '@components/TermInnerRow.jsx';
import React from 'react';

const TermRow = ({ term, showBy, isExpanded, onExpand, onCollapse, home, avSubjects }) => {
	const clicled = (e) => {
		if (e.target.hasAttribute('open'))
			onExpand();
		else
			onCollapse();
	};
	const printSortedDescriptors = (meanings, idTerm) => {
		let result = [];
		const subjectOrder = ['Norma', 'Jurisprudencia', 'Doctrina'];
		for (let i = 0; i < subjectOrder.length; i++) {
			const sortedMean = meanings.filter((m) => m.subject === subjectOrder[i]).sort((a, b) => {
				if (a.year === b.year)
					return a.descriptor.localeCompare(b.descriptor, undefined, { numeric: true, sensitivity: 'base' });
				return b.year - a.year;
			});
			result = result.concat(printMeanings(sortedMean, i, idTerm));
		}
		return result;
	};
	function printMeanings (sortedMean, index, idTerm) {
		return sortedMean.map((m, _) => {
			if (avSubjects && avSubjects[m.subject])
				return (
					<TermInnerRow
						key={`${m._id}`}
						idTerm={idTerm}
						meaning={m}
					/>
				);
			else
				return <React.Fragment key={`${m._id}`} />;
			// return <React.Fragment key={`0${index}-${j}`} />;
		});
	}
	return (
		<>
			<tr>
				{home
					? (<td>{term.term}</td>)
					: (
						<td>
							<details onToggle={clicled} {...(isExpanded ? { open: true } : {})}>
								<summary>
									<span className='dj-link'>{term.term}</span>
								</summary>
							</details>
						</td>
					)}
				<td className='ColumnaFechaPublicacion'>{new Date(term.created_at).toLocaleDateString('es-CO')}</td>
				<td>{new Date(term.updated_at).toLocaleDateString('es-CO')}</td>
				{showBy && <td>{term.created_by}</td>}
				{showBy && <td>{term.updated_by}</td>}
				<td className='TablaTextoCentrado'>
					<div className='TablaContenidoAcciones'>
						<Link to={`/terms/${term._id}`}>
							<img className='IconosTabla' src={IconoVer} />
						</Link>
						<Link to={`/terms/edit/${term._id}`}>
							<img className='IconosTabla' src={IconoEditar} />
						</Link>
					</div>
				</td>
			</tr>
			{isExpanded && printSortedDescriptors(term.meanings, term._id)}
		</>
	);
};

export default TermRow;
