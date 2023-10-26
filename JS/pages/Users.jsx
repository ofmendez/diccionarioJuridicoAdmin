import React from 'react';
import BarraSuperiorMovil from '../components/BarraSuperiorMovil.jsx';

const Users = () =>{
	
	const options= ['Filtrar', 'Administrador','Editor','Lector','Activo','Inactivo'];

	return (
		<div className="ContenidoPagina" id="ContenidoPagina">
			<BarraSuperiorMovil/>
			<div className="SeccionSuperiorHerramientas" id="SeccionMensajeEstadisticas">
				<div>
					<div className="SeccionBuscador">
						<form className="FormaBuscador" action="/action_page.php">
							<div className="SeccionInputBuscador">
								<img className="IconoLupa" src="/Images/Icons/Lupa.svg"/>
								<input className="InputBuscador" type="text" placeholder="Buscar" name="buscar"/>
							</div>
							<input className="SubmitBusqueda" type="submit" value="BUSCAR"/>
						</form>
					</div>
				</div>

				<div>
					<form>
						<select name="select" className="FiltrosBusqueda" defaultValue={options[0]}>
						{
							options.map((el,id) => <option disabled={id===0} key={el} value={el}>{el}</option>)
						}
						</select>
					</form>
				</div>
				<div>
					<div className="BotonAgregar"><img className="IconoMenu" src="/Images/Icons/AgregarUsuario.svg"/>Agregar Usuario</div>
				</div>
			</div>
			<div className="SeccionContenidoHome" id="SeccionContenidoHome">
				<div className="SeccionContenidoSubpagina">
					<h3>Usuarios</h3>
					<div className="SeparadorSeccionPrincipal"></div>
					<div className="ContenedorTablaUsuarios ScrollVerde">
						<table className="TablaUsuarios">
							<tbody>
							<tr className="TablaSeparadorTitulos">
								<th >Usuario</th>
								<th >Rol</th>
								<th >Últ. ingreso</th>
								<th >Estado</th>
								<th  className="TablaTextoCentrado">Acción</th>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
												<tr>
													<td>Nombre Ejemplo</td>
													<td>Admin</td>
													<td>19/05/2023</td>
													<td>Activo</td>
													<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
												</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							<tr>
								<td>Nombre Ejemplo</td>
								<td>Admin</td>
								<td>19/05/2023</td>
								<td>Activo</td>
								<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" src="/Images/Icons/Editar.svg"/></td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Users;

