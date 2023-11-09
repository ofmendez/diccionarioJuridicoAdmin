/* eslint-disable no-return-assign */
import { loadViewFile } from './files.js';

const content = document.getElementById('app');
const View = function (textView) {
	content.innerHTML = textView;
};

const PageState = function () {
	let currentState = new View('');
	this.change = state => currentState = state;
	this.getCurrentState = () => currentState;
};
const page = new PageState();

export const GoTo = (viewName) => {
	return new Promise((resolve, reject) => {
		loadViewFile(viewName).then((res) => {
			page.change(new View(res));
			resolve();
		});
	});
};
export const viewAv = ['Home', 'Terms', 'EditTerm', 'Login', 'Users', 'ViewTerm'];
