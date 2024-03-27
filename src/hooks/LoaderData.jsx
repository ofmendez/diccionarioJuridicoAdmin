const loadTerms = ({ loadingTerms, setLoadingTerms, setTerms }) => {
	if (loadingTerms === 'ok') return;
	fetchData({ setLoadinng: setLoadingTerms, path: '/terms' }).then((d) => setTerms(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadUsers = ({ loadingUsrs, setLoadingUsrs, setUsers }) => {
	if (loadingUsrs === 'ok') return;
	fetchData({ setLoadinng: setLoadingUsrs, path: '/users' }).then((d) => setUsers(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadTerm = ({ loadingTerm, setLoadingTerm, setTerm, id }) => {
	if (loadingTerm === 'ok') return;
	fetchData({ setLoadinng: setLoadingTerm, path: `/terms/${id}` }).then((d) => setTerm(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadUser = ({ loadingUser, setLoadingUser, setUser, id }) => {
	if (loadingUser === 'ok') return;
	fetchData({ setLoadinng: setLoadingUser, path: `/users/${id}` }).then((d) => setUser(d))
		.catch((err) => {
			console.log(err);
		});
};

const fetchData = ({ setLoadinng, path }) => {
	return new Promise((resolve, reject) => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;
		fetch(`${uri}${path}`, requestOptions)
			.then(res => {
				if (res.ok) return res.json();
				throw res;
			})
			.then(data => {
				setLoadinng('ok');
				resolve(data);
			})
			.catch(async err => {
				const text = await err.text();
				console.log('[GET txt]: ', text);
				console.log('[GET err]: ', err);
				setLoadinng(processError(err));
				reject(processError(err));
			});
	});
};

const fetchAll = ({ loadingDownload, setLoadingDownload }) => {
	if (loadingDownload === 'ok') return;
	setLoadingDownload('loading');
	const uri = import.meta.env.VITE_API_URI;
	return new Promise((resolve, reject) => {
		const myHeaders = new Headers();
		myHeaders.append('Authorization', `Bearer ${window.localStorage.token}`);

		const requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		fetch(`${uri}/terms/download`, requestOptions)
			.then((response) => response.blob())
			.then((blob) => {
				// Create a URL representing the blob
				const url = window.URL.createObjectURL(new Blob([blob]));
				const link = document.createElement('a');
				link.href = url;
				link.setAttribute('download', 'terms.csv');
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
				setLoadingDownload('ok');
				resolve();
			}).catch((err) => {
				setLoadingDownload(err);
				console.log(err);
				reject(err);
			});
	});
};

const processError = (err) => {
	if (err.status === 401) {
		window.localStorage.clear();
		window.location.href = '/login';
	}
	err = err.statusText && err.status === 404 ? 'No existe el elemento' : 'Ha ocurrido un error, por favor intenta nuevamente.';
	return err;
};

export { loadTerms, loadUsers, loadTerm, loadUser, fetchAll };
