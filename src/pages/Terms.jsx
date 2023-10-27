import React from "react";
import BarraSuperiorMovil from "@src/components/BarraSuperiorMovil.jsx";
import { IconoAgTermino, IconoEditar, IconoVer, IconoLupa } from "@src/components/icons";

const Terms = () => {
	return (
		<div className="ContenedorAplicativo">
			<div className="ContenidoPagina" id="ContenidoPagina">
				<BarraSuperiorMovil />
				<div className="SeccionSuperiorHerramientas" id="SeccionMensajeEstadisticas">
					<div>
						<div className="SeccionBuscador">
							<form className="FormaBuscador" action="/action_page.php">
								<div className="SeccionInputBuscador">
									<img className="IconoLupa" src={IconoLupa} />
									<input className="InputBuscador" type="text" placeholder="Buscar" name="buscar" />
								</div>
								<input className="SubmitBusqueda" type="submit" value="BUSCAR" />
							</form>
						</div>
					</div>
					<div>
						<div className="BotonAgregar">
							<img className="IconoMenu" src={IconoAgTermino} />
							Agregar Término
						</div>
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
										<td className="TablaTextoCentrado">
											<a href="ViewTerm.html">
												<img className="IconosTabla" src={IconoVer} />
											</a>
											<a href="EditTerm.html">
												<img className="IconosTabla" src={IconoEditar} />
											</a>
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
									<tr>
										<td>Regalías</td>
										<td>02/05/2023</td>
										<td>19/05/2023</td>
										<td>Nombre usuario</td>
										<td className="TablaTextoCentrado">
											<img className="IconosTabla" src={IconoVer} />{" "}
											<img className="IconosTabla" src={IconoEditar} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Terms;
