import React from 'react'
import {Link} from 'react-router-dom'

import './style/Category.css'

export default class Category extends React.Component{



	render(){

	return  (<div className="category">
                <Link activeClassName='active' to='/music/myMysic'>Моя Музика</Link>
                <Link activeClassName='active' to='/music/playList'>Плейлисти</Link>
								<Link activeClassName='active' to='/music/recommend'>Рекомендовані</Link>

							</div>)


	}


}



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/
