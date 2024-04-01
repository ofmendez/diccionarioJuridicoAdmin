import ButtonRound from './ButtonRound';

const FormNewUser = ({ ...props }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		// props.setEmail(event.target.value);
		props.setUserData((prev) => ({ ...prev, [name]: value }));
	};

	const currEmail = props.userData.email;
	const currProfession = props.userData.profession;
	const optionsRole = ['Selecciona un Rol', 'Administrador', 'Editor', 'Lector'];
	const optionsState = ['Selecciona un Estado', 'Activo', 'Inactivo'];
	const optionsExpiration = ['Selecciona un Vencimiento', 'Activo', 'Inactivo'];
	const setRandomPassword = (e) => {
		e.preventDefault();
		const randomPassword = Math.random().toString(36).slice(2, 17);
		window.dePass.value = randomPassword;
		props.setUserData((prev) => ({ ...prev, password: randomPassword }));
	};
	return (
		<div className='ContenidoDefinicion'>
			<form className='FormaEditarTerminos'>
				<input
					className='InputEmail' type='email' placeholder='Correo Electrónico' name='email'
					value={currEmail || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				<input
					className='InputProfession' type='text' placeholder='Profesión (Opcional)' name='profession'
					value={currProfession || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				<select
					name='role' className='FiltrosBusqueda' defaultValue={optionsRole.find(o => o === props.userData.role) || optionsRole[0]} onChange={handleChange}
				>
					{
						optionsRole.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				<select name='state' className='FiltrosBusqueda' defaultValue={optionsState[0]} onChange={handleChange}>
					{
						optionsState.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				<select name='expiration' className='FiltrosBusqueda' defaultValue={optionsExpiration[0]} onChange={handleChange}>
					{
						optionsExpiration.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				{props.edit
					? <></>
					: (
						<>
							<input
								value={props.userData.password || ''}
								className='InputPassword ' type='text' disabled placeholder='Contraseña' name='password' id='dePass' onChange={handleChange}
							/>
							<div className='SeparadorSecciones' />
							<ButtonRound onClick={setRandomPassword}>
								Generar Contraseña
							</ButtonRound>
						</>
					)}
			</form>
		</div>
	);
};

export default FormNewUser;
