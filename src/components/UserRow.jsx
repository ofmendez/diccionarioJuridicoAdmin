import { Link } from 'react-router-dom';
import { IconoEditar, IconoVer } from '@components/icons.js';

const UserRow = ({ user }) => {
	const getLastLogin = () => { // Repetida en SeccionUsuarios.jsx
		if (user.lastLogin)
			return new Date(user.lastLogin).toLocaleDateString('es-CO');
		if (user.initSuscription)
			return new Date(user.initSuscription).toLocaleDateString('es-CO');
		return '--/--/----';
	};
	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.role}</td>
			<td>{getLastLogin()}</td>
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
