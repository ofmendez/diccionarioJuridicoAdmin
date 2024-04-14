import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';
import { useEffect } from 'react';

const TermsTable = ({ tableClass, terms, showBy, rowsState, home, order, avSubjects }) => {
	const aviableOrders = {
		asc: (a, b) => a.term.localeCompare(b.term),
		desc: (a, b) => b.term.localeCompare(a.term),
		recent: (a, b) => new Date(b.created_at) - new Date(a.created_at),
		oldest: (a, b) => new Date(a.created_at) - new Date(b.created_at)
	};
	const printSortedTerms = (terms, showBy, rowsState) => {
		const sortedTerms = terms.sort(aviableOrders[order]);
		const isExpanded = (id) => rowsState?.expandedRows.includes(id);
		return sortedTerms.map((term) =>
			<TermRow
				key={term._id} showBy={showBy} term={term} home={home}
				isExpanded={isExpanded(term._id)}
				onExpand={() => rowsState?.setExpandedRows([...rowsState?.expandedRows, term._id])}
				onCollapse={() => rowsState?.setExpandedRows(rowsState?.expandedRows.filter((id) => id !== term._id))}
				avSubjects={avSubjects}
			/>
		);
	};
	useEffect(() => {
	}, [avSubjects]);
	return (
		<table className={tableClass}>
			<thead>
				<tr className='TablaSeparadorTitulos'>
					<th>Término</th>
					<th className='ColumnaFechaPublicacion'>Publicación</th>
					<th>Modificación</th>
					{showBy && <th>Creado</th>}
					{showBy && <th>Modificado</th>}
					<th className='TablaTextoCentrado'>Acción</th>
				</tr>
			</thead>
			<tbody>
				{printSortedTerms(terms, showBy, rowsState)}
			</tbody>
		</table>
	);
};

export default TermsTable;
