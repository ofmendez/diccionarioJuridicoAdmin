// Definición Medida Ancho Menu Lateral
export function definirMedidaMenuLateral () {
	const anchoMenuLateral = document.getElementById('MenuLateral').clientWidth;
	if (window.innerWidth > 1250) {
		document.documentElement.style.setProperty('--SeccionDerechaTamanoAutomatico', window.innerWidth - anchoMenuLateral + 'px');
		document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', anchoMenuLateral + 'px');
	} else if (window.innerWidth > 991)
		document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', anchoMenuLateral + 'px');
	else if (window.innerWidth < 990)
		document.documentElement.style.setProperty('--SeccionesDerechaMenuAncho', '0px');
}
// definirMedidaMenuLateral();
// addEventListener("resize", (event) => {
// definirMedidaMenuLateral();
// });

// Funacionamientos Menús
export function abrirMenu () {
	document.getElementById('MenuLateral').classList.add('slide-in');
	document.getElementById('MenuLateral').classList.remove('slide-out');
	document.getElementById('OverlayMenu').classList.add('overlay-in');
	document.getElementById('OverlayMenu').classList.remove('overlay-out');
	// document.getElementById('MenuConfiguracion').classList.add('slide-down');
	// document.getElementById('MenuConfiguracion').classList.remove('slide-up');
}

export function cerrarMenu () {
	document.getElementById('MenuLateral').classList.add('slide-out');
	document.getElementById('MenuLateral').classList.remove('slide-in');
	document.getElementById('OverlayMenu').classList.add('overlay-out');
	document.getElementById('OverlayMenu').classList.remove('overlay-in');
	// document.getElementById('MenuConfiguracion').classList.add('slide-down');
	// document.getElementById('MenuConfiguracion').classList.remove('slide-up');
	// document.getElementById('ContenedorMenuConfiguracion').classList.add('z-index-down');
	// document.getElementById('ContenedorMenuConfiguracion').classList.remove('z-index-up');
}

// Definición Altura Contenido Home
export function definirAlturaMensajeEstadisticas () {
	const alturaMensajeEstadisticas = document.getElementById('SeccionMensajeEstadisticas')?.clientHeight;
	// eslint-disable-next-line no-undef
	const valorPadding = getComputedStyle(document.documentElement).getPropertyValue('--PaddingElementos').replace('px', '');
	if (document.getElementById('SeccionContenidoHome'))
		document.getElementById('SeccionContenidoHome').style.height = (window.innerHeight - (alturaMensajeEstadisticas + (valorPadding * 2))) + 'px';
}

export default function reziseContent () {
	definirAlturaMensajeEstadisticas();
	definirMedidaMenuLateral();
}
// definirAlturaMensajeEstadisticas();
// addEventListener("resize", (event) => {
// definirAlturaMensajeEstadisticas();
// });
