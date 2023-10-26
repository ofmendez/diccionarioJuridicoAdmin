import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext.jsx';

const Menu = () => {
	const { switchMenu } = useContext(MenuContext);
	return (
		<>
			<div id="ContenedorMenuLateral">
				<div className="MenuLateral" id="MenuLateral">
					<div className="MenuLateralSeccion">
						<img className="LogoMenuLateral" src="/Images/LogoBlanco.svg"/>
						<ul className="MenuLateralLista">
							<li>
								<NavLink to="/" className="ContenedorItemMenuLateral" onClick={switchMenu(false)}>
									<img className="IconosMenuLateral" src="/Images/Icons/Inicio.svg"/>
									Inicio
								</NavLink>
							</li>
							<li>
								<NavLink to="/Users" className="ContenedorItemMenuLateral" onClick={switchMenu(false)}> 
									<img className="IconosMenuLateral" src="/Images/Icons/Perfil.svg"/>
									Usuarios 
								</NavLink>
							</li>
							<li>
								<NavLink to="/Terms" className="ContenedorItemMenuLateral" onClick={switchMenu(false)}> 
									<img className="IconosMenuLateral" src="/Images/Icons/Palabras.svg"/>
									Términos
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="MenuLateralSeccion InformacionPropiedadAplicativo">
						© 2023 Explore Diccionario
						Jurídico Minero-Energético.
					</div>
				</div>
			</div>
			<div  className="OverlayMenu overlay-out" id="OverlayMenu" onClick={switchMenu(false)}></div>
		</> 
	);
} 
export default Menu;

/*
 <!-- ----------------- INICIO MENÚ LATERAL ----------------- -->
				 <!-- Menu Vertical -->
				 <div id="ContenedorMenuLateral">
						<div class="MenuLateral" id="MenuLateral">
							 <div class="MenuLateralSeccion">
									<img class="LogoMenuLateral" src="../../Public/Images/LogoBlanco.svg"/>
									<ul class="MenuLateralLista">
										 <li>
												<a href="Home.html">
													 <div class="ContenedorItemMenuLateral"><img class="IconosMenuLateral" src="../../Public/Images/Icons/Inicio.svg"/> Inicio</div>
												</a>
										 </li>
										 <li>
												<a href="Users.html">
													 <div class="ContenedorItemMenuLateral"><img class="IconosMenuLateral" src="../../Public/Images/Icons/Perfil.svg"/> Usuarios</div>
												</a>
										 </li>
										 <li>
												<a href="Terms.html">
													 <div class="ContenedorItemMenuLateral"><img class="IconosMenuLateral" src="../../Public/Images/Icons/Palabras.svg"/> Términos</div>
												</a>
										 </li>
									</ul>
							 </div>
							 <div class="MenuLateralSeccion InformacionPropiedadAplicativo">
									© 2023 Explore Diccionario
									Jurídico Minero-Energético.
							 </div>
						</div>
				 </div>
				 <!-- Overlay -->
				 <div class="OverlayMenu" id="OverlayMenu" onclick="cerrarMenuLateral()" style="visibility:hidden;"></div>
				 <!-- ----------------- FIN MENÚ LATERAL ----------------- -->
				 */

/*

				 <!-- ----------------- INICIO MENÚ LATERAL ----------------- -->
	<!-- Menu Vertical -->
	<div id="ContenedorMenuLateral">
		<div class="MenuLateral" id="MenuLateral">
			<div class="MenuLateralSeccion">
				<img class="LogoMenuLateral" src="/Images/LogoBlanco.svg"/>
				<ul class="MenuLateralLista">
					<li>
						<a href="/">
							<div class="ContenedorItemMenuLateral ItemMenuActivo"><img class="IconosMenuLateral" src="/Images/Icons/Inicio.svg"/> Inicio</div>
						</a>
					</li>
					<li>
						<a href="?Users">
							<div class="ContenedorItemMenuLateral"><img class="IconosMenuLateral" src="/Images/Icons/Perfil.svg"/> Usuarios</div>
						</a>
					</li>
					<li>
						<a href="?Terms">
							<div class="ContenedorItemMenuLateral"><img class="IconosMenuLateral" src="/Images/Icons/Palabras.svg"/> Términos</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="MenuLateralSeccion InformacionPropiedadAplicativo">
				© 2023 Explore Diccionario
				Jurídico Minero-Energético.
			</div>
		</div>
	</div>
	<!-- Overlay -->
	<div class="OverlayMenu" id="OverlayMenu" onclick="window.menu.cerrarMenuLateral()" style="visibility:hidden;"></div>
	<!-- ----------------- FIN MENÚ LATERAL ----------------- -->

*/
