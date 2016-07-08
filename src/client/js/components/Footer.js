import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{visibility: this.props.visibility, position: 'fixed', fontFamily: ["Lucida Sans Unicode", "Lucida Grande", 'sans-serif'], fontSize: 12 + 'px', left: 40 + '%', bottom: 10 + 'px', width: 260 + 'px', height: 20 + 'px', textAlign: 'center'}}>
				<a className='lq2' href={this.props.loginHref} >{this.props.user}</a>{this.props.parent ? ' Parent: ' + this.props.parent : null}
			</div>
		);
	}
}
