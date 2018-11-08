import React from 'react'
import './../style/MusicElement.css'
import hoverElement from '../../decorators/hoverElement'
import {connect} from 'react-redux'
import {deleteMusicElement, addNewMusic} from '../../AC'

class MusicElement extends React.Component {

			constructor (props) {
				super(props)
					console.log(props.my_music_list , 'My music list');
					console.log(props.element , 'Element');

					console.log(props.my_music_list.includes(props.element))
		        this.state = {
		            myList : props.root_width === undefined,
								added : props.my_music_list.includes(props.element),
								update : false
		          };


						}
	    render(){
	    	const {element, hover, hoverOn, hoverOff, root_width} = this.props;
	    	const btnStyle = {
	    			opacity:'1'
	    		};
				const setRootSize = {
						width: root_width
					};


	        return (
	        	<div
	    	    	className= "root" style={setRootSize}
		            onMouseEnter={hoverOn}
		            onMouseLeave={hoverOff}>
		        	<div>
		        		{hover ? this.decorateMainImg(btnStyle) : null }
						<img src={element.icon === null ? "/assets/img/music/default_music_img.png" : element.icon} style={btnStyle} alt="" />
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
					marginLeft: "10px",
					marginTop: "10px",
					width: "30px",
	    		height: "30px",
	    		zIndex: "2"
	    	}
	    	return <img src="/assets/img/music/play(white).png" style={imgstyle} alt="" />
	    }

	    getImageBody = () => {
				const {element} = this.props
	    	return <div>
	  			<img src="/assets/img/music/magic1.png" alt="" title="Показати схожі" />
					{this.state.myList ? 	null : <img src="/assets/img/music/del1.png" title="Видалит" alt="" onClick={this.hendleDelete} /> }
	  			<img src={this.state.myList ? ( this.state.added ? "/assets/img/music/check.png" : "/assets/img/music/plus.png" ) : "/assets/img/music/more1.png"} alt="" onClick={this.state.myList ? (this.state.added ? null : this.hendleAddNewMusick) : null } title={this.state.myList ? "Додати в свій список" : "Блільше" } />
	    	</div>
	    }

			hendleDelete = () => {
				const {deleteMusicElement, element} = this.props
				deleteMusicElement(element.id);
				this.setState({
					update: !this.state.update
				})
			}



			hendleAddNewMusick = () => {
				const {addNewMusic, element, my_music_list} = this.props

				console.log('add --- ', element);

				addNewMusic(element)

				this.setState({
					update: !this.state.update
				})
			}



}


export default connect(state => ({
	my_music_list : state.musics
}), {deleteMusicElement, addNewMusic})(hoverElement(MusicElement))
