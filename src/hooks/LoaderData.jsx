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

const fetchData = ({ setLoadinng, path }) => {
	return new Promise((resolve, reject) => {
		setLoadinng('loading');
		const uri = import.meta.env.VITE_API_URI;
		fetch(`${uri}${path}`)
			.then(res => {
				if (res.ok) return res.json();
				throw new Error('Error al cargar los datos');
			})
			.then(data => {
				console.log('fetch: ', data);
				setLoadinng('ok');
				resolve(data);
			})
			.catch(err => {
				setLoadinng(err.message);
				console.log(err);
				reject(err);
			});
	});
};

export { loadUsers, loadTerms };
