import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';

function printSortedTerms (terms, showBy) {
	const sortedTerms = terms.sort((a, b) => {
		if (a.term.toLowerCase() < b.term.toLowerCase())
			return -1;
		if (a.term.toLowerCase() > b.term.toLowerCase())
			return 1;
		return 0;
	});
	return sortedTerms.map((term) =>
		<TermRow key={term._id} showBy={showBy} term={term} />
	);
}
const TermsTable = ({ tableClass, terms, showBy }) => {
	return (
		<table className={tableClass}>
			<tbody>
				<tr className='TablaSeparadorTitulos'>
					<th>Término</th>
					<th>Publicación</th>
					<th>Modificación</th>
					{showBy && <th>Creado por</th>}
					{showBy && <th>Modificado por</th>}
					<th className='TablaTextoCentrado'>Acción</th>
				</tr>
				{printSortedTerms(terms, showBy)}
			</tbody>
		</table>
	);
};

export default TermsTable;
