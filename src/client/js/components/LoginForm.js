import React from 'react';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{visibility: this.props.visibility, position: 'fixed', fontFamily: ["Lucida Sans Unicode", "Lucida Grande", 'sans-serif'], fontSize: 12 + 'px', left: 40 + '%', bottom: 40 + '%', width: 260 + 'px', height: 20 + 'px', textAlign: 'center'}}>
				<a className='lq2' href={this.props.loginHref} target='_blank'>
					<img className='nsi'  draggable='false' src='/assets/img/facebook-login-button.png'></img>
				</a>
			</div>
		);
	}
}
