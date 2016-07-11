import React from 'react';
import UserForm from './UserForm';
import LoginForm from './LoginForm';
import Footer from './Footer';
import SocialBox from './SocialBox';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			loginHref: '/auth/facebook',
			target: '_blank',
			visibility: 'hidden',
			loginVisibility: 'visible',
			footerVisibility: 'hidden',
			button: 'Login',
			referal: false,
			parent: false,
			onChange: () => {}
		};
	}

	componentWillMount() {
		$.ajax({
			type: 'GET',
			url: '/currentUser'
		}).success(res => {
			if (res.user) {
				this.setState({
					user: res.user,
					loginHref: '/logout',
					target: '',
					visibility: 'visible',
					loginVisibility: 'hidden',
					footerVisibility: 'visible',
					button: res.user,
					referal: res.userId,
					parent: res.parent
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
					
					<UserForm visibility={this.state.visibility} onChange={this.state.onChange} user={this.state.user} />
					<LoginForm visibility={this.state.loginVisibility} loginHref={this.state.loginHref} />
				</div>
				<div id='smh' style={{opacity: 0, position: 'fixed', left: 0 + 'px', top: 0 + 'px', zIndex: 21}}>
					<img id='cstx' className='nsi'  draggable='false' width='225' height='36' src='/assets/img/customskins2.png' style={{visibility: 'hidden', position: 'fixed', bottom: 30 + 'px', opacity: .4, zIndex: 50, display: 'none'}}></img>

					<SocialBox referal={this.state.referal} />
					
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

					<Footer visibility={this.footerVisibility} user={this.state.user} loginHref={this.state.loginHref} parent={this.state.parent} />
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
