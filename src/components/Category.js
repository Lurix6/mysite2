import React from 'react'

export default class Category extends React.Component{

	state = {
		curentState: 'myMysic'
	}

	render(){

	const curentElement = {
		 	borderBottom: "2px solid #00AEB5"
	};

	return  (<div className="category">
                <p onClick={() => {this.props.updateCurentCategory('myMysic'); this.setState({curentState:'myMysic'})} } style={this.state.curentState === 'myMysic' ? curentElement : null } >Моя Музика</p>
                <p onClick={() => {this.props.updateCurentCategory('playList'); this.setState({curentState:'playList'})} } style={this.state.curentState === 'playList' ? curentElement : null  }>Плейлисти</p>
								<p onClick={() => {this.props.updateCurentCategory('recommend'); this.setState({curentState:'recommend'})} } style={this.state.curentState === 'recommend' ?curentElement : null  }>Рекомендовані</p>

							</div>)


	}


}



/*

.category p:hover {
 	border-bottom: 2px solid #b3b4b5;
}


*/
