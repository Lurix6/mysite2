import React, {Component} from 'react';
import MusicElement from './MusicElement'
import {connect} from 'react-redux'
import {setNewCarentMusic} from '../../AC'


class NewMusicList extends Component{

	render(){


		const musicElements = this.props.listElements.map(element => <li onClick={() => {const {setNewCarentMusic} = this.props; setNewCarentMusic(element)}} key={element.id}>
			<MusicElement
				element = {element}
			/>
		</li> )

		return(
				<ul>
					{musicElements}
				</ul>
			);
		}
	}



export default connect(state => ({
  listElements: state.noveltySongs
}), {setNewCarentMusic})(NewMusicList)
