import UserRow from '@components/UserRow.jsx';

const UsersTable = ({ users }) => {
	return (
		<table className='TablaRecientes'>
			<tbody>
				<tr className='TablaSeparadorTitulos'>
					<th>Usuario</th>
					<th>Rol</th>
					<th>Últ. ingreso</th>
					<th className='TablaTextoCentrado TablaContenidoAcciones'>Acción</th>
				</tr>
				{users.map((user) => (
					<UserRow key={user._id} user={user} />
				))}
			</tbody>
		</table>
	);
};

export default UsersTable;
