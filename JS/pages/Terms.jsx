import React from 'react';
import BarraSuperiorMovil from '../components/BarraSuperiorMovil.jsx';

const Terms = () => {
	return (
		<div className="ContenedorAplicativo">
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
						<div className="BotonAgregar"><img className="IconoMenu" src="/Images/Icons/AgregarTermino.svg"/>Agregar Término</div>
					</div>
				</div>
				<div className="SeccionContenidoHome" id="SeccionContenidoHome">
					<div className="SeccionContenidoSubpagina">
						<h3>Términos</h3>
						<div className="SeparadorSeccionPrincipal"></div>
						<div className="ContenedorTablaUsuarios ScrollVerde">
							<table className="TablaUsuarios">
								<tbody>
									<tr className="TablaSeparadorTitulos">
										<th>Término</th>
										<th>Publicación</th>
										<th>Modificación</th>
										<th>Modificado por</th>
										<th className="TablaTextoCentrado">Acción</th>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><a href="ViewTerm.html"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/></a><a 
											href="EditTerm.html"><img className="IconosTabla" 
												src="/Images/Icons/Editar.svg"/></a></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
											src="/Images/Icons/Editar.svg"/></td>
									</tr>
						<tr>
							<td>Regalías</td>
							<td>02/05/2023</td>
							<td>19/05/2023</td>
							<td>Nombre usuario</td>
							<td className="TablaTextoCentrado"><img className="IconosTabla" src="/Images/Icons/Ver.svg"/> <img className="IconosTabla" 
								src="/Images/Icons/Editar.svg"/></td>
						</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Terms;
