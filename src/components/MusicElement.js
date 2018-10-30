import React from 'react'
import './style/MusicElement.css'
import hoverElement from '../decorators/hoverElement'
import {connect} from 'react-redux'
import {deleteMusicElement} from '../AC'

class MusicElement extends React.Component {
	    render(){
	    	const {element, hover, hoverOn, hoverOff} = this.props;
	    	const btnStyle = {
	    			opacity:'1'
	    		};

	        return (
	        	<div
	    	    	className= "root"
		            onMouseEnter={hoverOn}
		            onMouseLeave={hoverOff}>
		        	<div>
		        		{hover ? this.decorateMainImg(btnStyle) : null }
						<img src={element.icon === null ? "assets/img/music/default_music_img.png" : element.icon} style={btnStyle} alt="" />
						<div className="list_music_inf">
							<span>{element.title}</span>
							<span>{element.executor}</span>
						</div>
					</div>
					<div className="list_music_time">
						{hover ? this.getImageBody() : element.full_time }
					</div>

	        	</div>
	        );
	    }

	    decorateMainImg = (btnStyle) => {

	    	btnStyle.opacity = 0.25

	    	const imgstyle = {
	    		position: "absolute",
					marginLeft: "12px",
					marginTop: "12px",
					width: "25px",
	    		height: "25px",
	    		zIndex: "2"
	    	}
	    	return <img src="assets/img/music/play(white).png" style={imgstyle} alt="" />
	    }

	    getImageBody = () => {
				const {element} = this.props
	    	return <div>
	  			<img src="assets/img/music/magic.png" alt="" />
	  			<img src="assets/img/music/del.png" alt="" onClick={this.hendleDelete} />
	  			<img src="assets/img/music/more.png" alt="" />
	    	</div>
	    }

			hendleDelete = () => {
				const {deleteMusicElement, element} = this.props
				deleteMusicElement(element.id);
				console.log("delete11111111111111111");
			}


}


export default connect(null, {deleteMusicElement})(hoverElement(MusicElement))
