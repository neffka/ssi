import React from 'react';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			loginHref: '/auth/facebook',
			target: '_blank',
			visibility: 'hidden',
			button: 'Login',
			onChange: () => {}
		};
	}

	componentWillMount() {
		$.ajax({
			type: 'GET',
			url: '/currentUser'
		}).success(res => {
			console.log(res.geo);
			if (res.user) {
				this.setState({
					user: res.user,
					loginHref: '/logout',
					target: '',
					visibility: 'visible',
					button: res.user
				});
			};
		});
	}

	render() {
		return (
			<div>
				<div id='nbg' style={{ position: 'fixed', left: 0 + 'px', top: 0 + 'px'}}></div>
				<div id='login' style={{ position: 'fixed', left: 0 + 'px', top: 0 + 'px',  width: 100 + '%', height: 100 + '%', zIndex: 20, marginTop: 64 + 'px'}}>
					<div id='logo' style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', width: 450 + 'px', height: 115 + 'px', marginTop: 50 + 'px'}}>
						<div id='logoih' style={{position: 'absolute', zIndex: 999999}}></div>
					</div>
					<div id='lastscore' style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', marginTop: 44 + 'px', fontFamily: ['Lucida Sans Unicode', 'Lucida Grande', 'sans-serif'], fontSize: 15 + 'px', color: '#FFFFFF'}}></div>
					<div id='tips' style={{marginLeft: 'auto', marginRight: 'auto', width: 360 + 'px', height: 30 + 'px', color: '#8068C0', textAlign: 'center', fontSize: 14 + 'px', fontFamily: ['Lucida Sans Unicode', 'Lucida Grande', 'sans-serif'], opacity: 0}}></div>
					
					<div className='nick_play' style={{visibility: this.state.visibility}}>
						<div style={{marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}>
							<div className='taho' id='nick_holder' style={{width: 244 + 'px', marginTop: 34 + 'px', background: '#4C447c', boxShadow: '0px 6px 50px rgba(0,0,0,1)', opacity: 0}}>
								<input className='sumsginp nickn' style={{width: 220 + 'px', height: 24 + 'px'}} id='nick' onChange={this.state.onChange} value={this.state.user} maxLength='24'></input>
							</div>
							<div id='victory_holder' style={{display: 'none', fontFamily: ['Lucida Sans Unicode, "Lucida Grande", sans-serif'], fontSize: 18 + 'px', color: '#FFFFFF', marginTop: 22 + 'px'}}>
								<div style={{fontSize: 24 + 'px', marginTop: 12 + 'px'}}>
									<b>You are the new champion!</b>
								</div>
								<div style={{opacity: .6, marginTop: 12 + 'px'}}>
									Enter a victory message that you would like all other players to see!</div>
								<div className='taho' id='victory_bg' style={{width: 444 + 'px', marginTop: 50 + 'px', background: '#00A4CF', boxShadow: '0px 0px 50px rgba(64,64,255,1)'}}>
									<input className='sumsginp' id='victory' style={{width: 420 + 'px', height: 24 + 'px', color:'#FFFFFF'}} placeholder="Your message" maxLength='140'></input>
								</div>
							</div>
						</div>
					</div>
					<div id='playh' style={{visibility: this.state.visibility, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}></div>
					<div id='saveh' style={{visibility: this.state.visibility, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', display: 'none'}}></div>
				</div>
				<div id='smh' style={{opacity: 0, position: 'fixed', left: 0 + 'px', top: 0 + 'px', zIndex: 21}}>
					<img id='cstx' className='nsi'  draggable='false' width='225' height='36' src='/assets/img/customskins2.png' style={{position: 'fixed', bottom: 30 + 'px', opacity: .4, zIndex: 50, display: 'none'}}></img>
				
					<div id='fbh' style={{position: 'fixed', bottom: 20 + 'px', zIndex: 50}}>
						<a className='btn btnt' draggable="false" id='fb' style={{width: 80 + 'px', height: 74 + 'px'}} href='#'>
							<img className='nsi'  draggable='false' width='80' height='74' src='/assets/img/facebook.png'></img>
						</a>
					</div>
				
					<div id='twth' style={{position: 'fixed', bottom: 20 + 'px', zIndex: 50}}>
						<a className='btn btnt' draggable="false" id='twt' style={{width:80 + 'px', height:74 + 'px'}} href='#'>
							<img className='nsi'  draggable='false' width='80' height='74' src='/assets/img/twitter.png'></img>
						</a>
					</div>

					
					<div id='cskh' style={{position: 'fixed', left: 20 + 'px', bottom: 16 + 'px', zIndex: 50, display: 'none'}}>
						<a className='btn btnt' draggable="false" id='csk' style={{width: 95 + 'px', height: 89 + 'px'}} href='#'>
							<img className='nsi'  draggable='false' width='95' height='89' src='/assets/img/changeskin.png'></img>
						</a>
					</div>
					
					<div id='grqh' style={{position: 'fixed', right: 20 + 'px', top: 16 + 'px', zIndex: 50}}>
						<a className='btn btnt' draggable="false" id='grq' style={{width:90 + 'px', height: 87 + 'px'}} href='#'>
							<img id='grqi' className='nsi'  draggable='false' width='90' height='87' src='/assets/img/highquality.png'></img>
						</a>
					</div>

					<div id='plq' style={{position: 'fixed', fontFamily: ["Lucida Sans Unicode", "Lucida Grande", 'sans-serif'], fontSize: 13 + 'px', color: '#408040', right: 10 + 'px', top: 10 + 'px', width: 260 + 'px', height: 400 + 'px', textAlign: 'right'}}>&nbsp;</div>

					<div id='clq' style={{position: 'fixed', fontFamily: ["Lucida Sans Unicode", "Lucida Grande", 'sans-serif'], fontSize: 12 + 'px', left: 10 + 'px', bottom: 10 + 'px', width: 260 + 'px', height: 20 + 'px', textAlign: 'center'}}>
						<a className='lq2' href={this.state.loginHref} target={this.state.target}>{this.state.button}</a>
					</div>

				</div>


				<div id='pskh' style={{display: 'none', opacity: 0, position: 'fixed', zIndex: 52}}>
					<a className='btn btnt' draggable="false" id='psk' style={{width: 87 + 'px', height: 88 + 'px'}} href='#'>
						<img className='nsi'  draggable='false' width='87' height='88' src='/assets/img/prev.png'></img>
					</a>
				</div>

				<div id='nskh' style={{display: 'none', opacity: 0, position: 'fixed', zIndex: 52}}>
					<a className='btn btnt' draggable="false" id='nsk' style={{width: 87 + 'px', height: 88 + 'px'}} href='#'>
						<img className='nsi'  draggable='false' width='87' height='88' src='/assets/img/next.png'></img>
					</a>
				</div>
			</div>
		);
	}
}
