import { IconoEditar, IconoVer } from '@src/components/icons.js';

const UserRow = ({ user }) => {
	return (
		<tr>
			<td>{user.name}</td>
			<td>{user.role}</td>
			<td>{user.lastLogin}</td>
			<td className='TablaTextoCentrado'>
				<a href='ViewTerm.html'>
					<img className='IconosTabla' src={IconoVer} />
				</a>
				<a href='EditTerm.html'><img className='IconosTabla' src={IconoEditar} /></a>
			</td>
		</tr>
	);
};

export default UserRow;
