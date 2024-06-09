import ButtonRound from './ButtonRound';

const FormNewUser = ({ ...props }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		props.setUserData((prev) => ({ ...prev, [name]: value }));
	};
	const currEmail = props.userData.email;
	const currProfession = props.userData.profession;
	const currInitSubscrip = props.userData.initSuscription?.split('T')[0];
	const optionsRole = ['Selecciona un Rol', 'Administrador', 'Editor', 'Lector'];
	const optionsSuscription = ['Selecciona un Estado', 'Activo', 'Inactivo'];
	const optionsExpiration = ['Selecciona un Vencimiento', '1 mes', '6 meses', '1 año', 'ilimitado'];
	const dictTimeToExpire = {
		'1 mes': '31',
		'6 meses': '182',
		'1 año': '365',
		ilimitado: '-1'
	};
	const getEndSuscription = () => {
		if (!props.userData.timeToExpire || !currInitSubscrip) return '';
		const date = new Date(currInitSubscrip);
		if ('' + props.userData.timeToExpire === '-1') return 'ilimitado';
		date.setDate(date.getDate() + parseInt(props.userData.timeToExpire));
		return date.toISOString().split('T')[0];
	};
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
				<select
					name='suscription' className='FiltrosBusqueda' defaultValue={optionsSuscription.find(o => o === props.userData.suscription) || optionsSuscription[0]}
					onChange={handleChange}
				>
					{
						optionsSuscription.map((el, id) => <option disabled={id === 0} key={el} value={el}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				<select
					name='timeToExpire' className='FiltrosBusqueda'
					defaultValue={dictTimeToExpire[optionsExpiration.find(o => '' + dictTimeToExpire[o] === '' + props.userData.timeToExpire)] || optionsExpiration[0]}
					onChange={handleChange}
				>
					{
						optionsExpiration.map((el, id) => <option disabled={id === 0} key={el} value={dictTimeToExpire[el]}>{el}</option>)
					}
				</select>
				<div className='SeparadorSecciones' />
				<span>Inicio de suscripción</span>
				<input
					className='FiltrosBusqueda' type='date' placeholder='Inicio suscripción' name='initSuscription'
					value={currInitSubscrip || ''} onChange={handleChange}
				/>
				<div className='SeparadorSecciones' />
				<span>Fin de suscripción</span>
				{
					getEndSuscription() === 'ilimitado'
						? <span className='FiltrosBusqueda'>ilimitado</span>
						: (
							<input
								className='FiltrosBusqueda' type='date' placeholder='Fin suscripción' disabled
								value={currInitSubscrip ? getEndSuscription() : ''} onChange={handleChange}
							/>
						)
				}
				<div className='SeparadorSecciones' />
				{props.edit
					? <></>
					: (
						<>
							<input
								value={props.userData.password || ''}
								className='InputPassword ' type='text' placeholder='Contraseña' name='password' id='dePass' onChange={handleChange}
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
