/* eslint-disable operator-linebreak */
import '@styles/Skeleton.css';

export function Skeletons ({ children, on }) {
	return on === 'loading' ?
	// Componente a mostrar mientras se cargan los datos
		<div className='SeccionSuperiorColumnaIzquierdaHome skeleton'>
			<h3>Loading...</h3>
		</div>
	// -----------------------------------------------
		: (on === 'ok' ?
		// Permite renderizar el componente hijo porque ya se cargaron los datos
			<>{children}</>
		// -----------------------------------------------
			:
		// Componente a mostrar si hubo un error al cargar los datos
			<div className='SeccionSuperiorColumnaIzquierdaHome'>
				<h3>{on}</h3>
			</div>);
// -----------------------------------------------
}
