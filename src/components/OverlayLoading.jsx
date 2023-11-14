import '@styles/Loading.css';

const OverlayLoading = ({ children }) => {
	return (
		<div className='overlayLoading'>
			<h3 className='loading'>Guardando</h3>
		</div>
	);
};

export default OverlayLoading;
