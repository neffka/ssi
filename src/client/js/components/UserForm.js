import React from 'react';

export default class UserForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{visibility: this.props.visibility}}>
				<div className='nick_play'>
					<div style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
						<div className='taho' id='nick_holder' style={{width: 244 + 'px', marginTop: 34 + 'px', background: '#4C447c', boxShadow: '0px 6px 50px rgba(0,0,0,1)', opacity: 0}}>
							<input className='sumsginp nickn' style={{width: 220 + 'px', height: 24 + 'px'}} id='nick' onChange={this.props.onChange} value={this.props.user} maxLength='24'></input>
						</div>
						<div id='victory_holder' style={{display: 'none', fontFamily: ['Lucida Sans Unicode, "Lucida Grande", sans-serif'], fontSize: 18 + 'px', color: '#FFFFFF', marginTop: 22 + 'px'}}>
							<div style={{fontSize: 24 + 'px', marginTop: 12 + 'px'}}>
								<b>You are the new champion!</b>
							</div>
							<div style={{opacity: .6, marginTop: 12 + 'px'}}>
								Enter a victory message that you would like all other players to see!</div>
							<div className='taho' id='victory_bg' style={{width: 444 + 'px', marginTop: 50 + 'px', background: '#00A4CF', boxShadow: '0px 0px 50px rgba(64,64,255,1)'}}>
								<input className=' sumsginp' id='victory' style={{width: 420 + 'px', height: 24 + 'px', color:'#FFFFFF'}} placeholder="Your message" maxLength='140'></input>
							</div>
						</div>
					</div>
				</div>

				<div id='playh' style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}></div>
				<div id='saveh' style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', display: 'none'}}></div>
			</div>
		);
	}
}
