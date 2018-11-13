import React from 'react'
import {NavLink} from 'react-router-dom'

import './../style/Category.css'

export default class Category extends React.Component{



	render(){

	return  (<div className="category">
                <NavLink activeClassName='active' to='/music/myList'>Моя Музика</NavLink>
                <NavLink to='/music/playList'>Плейлисти</NavLink>
								<NavLink to='/music/recommend'>Рекомендовані</NavLink>

							</div>)


	}


}



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/
