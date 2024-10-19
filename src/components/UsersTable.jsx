import UserRow from '@components/UserRow.jsx';

const UsersTable = ({ users }) => {
	const getLastLogin = (user) => { // Repetida en SeccionUsuarios.jsx
		if (user.lastLogin)
			return user.lastLogin;
		if (user.initSuscription)
			return user.initSuscription;
		return new Date().toISOString();
	};
	return (
		<table className='TablaRecientes'>
			<tbody>
				<tr className='TablaSeparadorTitulos'>
					<th>Usuario</th>
					<th>Rol</th>
					<th>Últ. ingreso</th>
					<th className='TablaTextoCentrado'>Acción</th>
				</tr>
				{users.sort((a, b) => new Date(getLastLogin(b)) - new Date(getLastLogin(a)))
					.map((user) => (
						<UserRow key={user._id} user={user} />
					))}
			</tbody>
		</table>
	);
};

export default UsersTable;
