const Button = ({ onClick, children }) => {
	return <button onClick={onClick} className='dj_button'>{children}</button>;
};

export default Button;
