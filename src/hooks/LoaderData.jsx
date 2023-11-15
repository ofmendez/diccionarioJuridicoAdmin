const loadUsers = ({ loadingUsrs, setLoadingUsrs, setUsers }) => {
	if (loadingUsrs === 'ok') return;
	fetchData({ setLoadinng: setLoadingUsrs, path: '/users' }).then((d) => setUsers(d))
		.catch((err) => {
			console.log(err);
		});
};

const loadTerms = ({ loadingTerms, setLoadingTerms, setTerms }) => {
	if (loadingTerms === 'ok') return;
	fetchData({ setLoadinng: setLoadingTerms, path: '/terms' }).then((d) => setTerms(d))
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
			.then(async res => {
				if (res.ok) return res.json();
				const text = await res.text();
				console.log(text);
				const error = new Error();
				error.data = res;
				throw error;
			})
			.then(data => {
				setLoadinng('ok');
				resolve(data);
			})
			.catch(err => {
				console.log(err);
				const msg = err.data && err.data.status === 404 ? 'No existe el elemento' : 'Ha ocurrido un error, por favor intenta nuevamente.';
				setLoadinng(msg);
				reject(new Error(msg));
			});
	});
};

export { loadUsers, loadTerms, loadTerm };
