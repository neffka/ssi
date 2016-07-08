import React from 'react';

export default class SocialBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{visibility: this.props.visibility, left: 90 + '%'}}>
				<div id='vkh' style={{position: 'fixed', bottom: 20 + 'px', zIndex: 50}}>
					<a className='btn btnt' draggable="false" id='vk' style={{width: 80 + 'px', height: 74 + 'px'}} href={"http://vk.com/share.php?url=" + encodeURIComponent("http://megaslither.io/?ref=" + this.props.referal)}>
						<img className='nsi'  draggable='false' width='80' height='74' src='/assets/img/facebook.png'></img>
					</a>
				</div>
			
				<div id='fbh' style={{position: 'fixed', bottom: 20 + 'px', zIndex: 50}}>
					<a className='btn btnt' draggable="false" id='fb' style={{width: 80 + 'px', height: 74 + 'px'}} href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("http://megaslither.io/?ref=" + this.props.referal)}>
						<img className='nsi'  draggable='false' width='80' height='74' src='/assets/img/facebook.png'></img>
					</a>
				</div>
			
				<div id='twth' style={{position: 'fixed', bottom: 20 + 'px', zIndex: 50}}>
					<a className='btn btnt' draggable="false" id='twt' style={{width:80 + 'px', height:74 + 'px'}} href={'http://twitter.com/intent/tweet?status=' + encodeURIComponent("Come and play http://megaslither.io/?ref=" + this.props.referal + " #megaslitherio")}>
						<img className='nsi'  draggable='false' width='80' height='74' src='/assets/img/twitter.png'></img>
					</a>
				</div>
			</div>
		);
	};
}
