import React,{useState} from 'react';

const SeccionUsuarios = () => {
	const [usuarios, setUsuarios] = useState([
	return (
		<div className="SeccionSuperiorColumnaIzquierdaHome">
			<div className="SeccionTituloLink">
				<h3>Usuarios Recientes</h3>
				<a href="Users.html">
					<p>Ver todos</p>
				</a>
			</div>
			<div className="SeparadorSeccionPrincipal"></div>
			<div className="ContenedorTablaRecientes ScrollVerde">
				<table className="TablaRecientes">
					<tbody>
						<tr className="TablaSeparadorTitulos">
							<th>Usuario</th>
							<th>Rol</th>
							<th>Últ. ingreso</th>
							<th className="TablaTextoCentrado">Acción</th>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><a href="ViewTerm.html"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/></a><a 
								href="EditTerm.html"><img className="IconosTabla" 
									src="/Images/Icons/Editar.svg"/></a></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
										<tr>
											<td>Nombre Ejemplo</td>
											<td>Admin</td>
											<td>19/05/2023</td>
											<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
												src="/Images/Icons/Editar.svg"/></td>
										</tr>
						<tr>
							<td>Nombre Ejemplo</td>
							<td>Admin</td>
							<td>19/05/2023</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SeccionUsuarios;
