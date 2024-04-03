import { Link } from 'react-router-dom';

import { IconoEditar, IconoVer } from '@components/icons.js';

const UserRow = ({ user }) => {
	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.role}</td>
			<td>{user.lastLogin}</td>
			<td className='TablaTextoCentrado'>
				<div className='TablaContenidoAcciones'>
					<Link to={`/users/${user._id}`}>
						<img className='IconosTabla' src={IconoVer} />
					</Link>
					<Link to={`/users/edit/${user._id}`}>
						<img className='IconosTabla' src={IconoEditar} />
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default UserRow;
