const createTerm = ({ loadingTerm, setLoadingTerm, body, handleDonePost }) => {
	if (loadingTerm === 'ok') return;
	postData({ setLoadinng: setLoadingTerm, path: '/terms', body }).then((d) => handleDonePost(d))
		.catch((err) => {
			window.alert(err);
		});
};

const postData = ({ setLoadinng, path, body }) => {
	return new Promise((resolve, reject) => {
		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`);
		myHeaders.append('Content-Type', 'application/json; charset=utf-8');

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify(body)
		};

		fetch(`${uri}${path}`, requestOptions).then(async res => {
			if (res.ok) return res.json();
			const text = await res.text();
			console.log(text);
			const error = new Error();
			error.data = res;
			throw error;
		}).then(data => {
			setLoadinng('ok');
			resolve(data);
		}).catch(err => {
			setLoadinng('error');
			console.log(err);
			const msg = err.data && err.data.status === 422 ? 'Datos incompletos, por favor revisa los campos' : 'Ha ocurrido un error, por favor intenta nuevamente.';
			reject(new Error(msg));
		});
	});
};

export { createTerm };
