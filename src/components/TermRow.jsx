import { Link } from 'react-router-dom';

import { IconoEditar, IconoVer } from '@components/icons.js';

const TermRow = ({ term, showBy }) => {
	return (
		<tr>
			<td>{term.term}</td>
			<td>{new Date(term.created_at).toLocaleDateString('en-US')}</td>
			<td>{new Date(term.updated_at).toLocaleDateString('en-US')}</td>
			{showBy && <td>{term.created_by}</td>}
			<td className='TablaTextoCentrado'>
				<Link to={`/terms/${term._id}`}>
					<img className='IconosTabla' src={IconoVer} />
				</Link>
				{/* <Link to={`/terms/edit/${term._id}`}>
					<img className='IconosTabla' src={IconoEditar} />
				</Link> */}
			</td>
		</tr>
	);
};

export default TermRow;
