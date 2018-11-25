import React from 'react'
import {NavLink} from 'react-router-dom'
import {change_curent_music_category} from '../../AC'
import {connect} from 'react-redux'
import './../style/Category.css'

class Category extends React.Component{

	render(){

	return  (<div className="category">
                <a onClick={this.categotyMyList}>Моя Музика</a>
                <a onClick={this.categotyPlayList}>Плейлисти</a>
								<a onClick={this.categotyRecommend}>Рекомендовані</a>

							</div>)


	}

	categotyMyList = () =>{
		this.props.change_curent_music_category('myList');
		console.log('myList');
	}
	categotyPlayList = () =>{
		this.props.change_curent_music_category('playList');
		console.log('playList');
	}
	categotyRecommend = () =>{
		this.props.change_curent_music_category('recommend');
		console.log('recommend');
	}


}





export default connect(null, {change_curent_music_category})(Category)



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/
