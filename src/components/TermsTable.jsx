import TermRow from '@components/TermRow.jsx';
import '@styles/Loading.css';

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
				{terms.map((term) => (
					<TermRow key={term._id} showBy={showBy} term={term} />
				))}
			</tbody>
		</table>
	);
};

export default TermsTable;
