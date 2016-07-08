require('babel/polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import domready from 'domready';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Game />
			</div>
		);
	}
};

function createContainer() {
	var d = document.createElement('div');
	d.id = 'content';
	d.className = 'container-liquid';
	return d;
}



//domready(() => {
var container = createContainer();
var domnode = document.body.appendChild(container);
ReactDOM.render(<Main />, domnode);
//});
