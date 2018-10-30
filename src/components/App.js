import React, { Component } from 'react';
import './style/App.css';
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'
import Search from './Search'
import Recommend from './Recommend'


class App extends Component {

	state = {
		curentCategory : 'myMysic'
	}

	updateCurentCategory = (value) => {
		console.log(this.state.curentCategory);
		this.setState({
			curentCategory : value
		})

	}


  render() {

    return (
        <div className ="musicBlock">
            <CurentMusic/>
            <div className="fullListMusic">
              <Category updateCurentCategory={this.updateCurentCategory} defaultCurentCategory ={this.curentCategory} />
              <hr />
              <div className="showlist">
              	<Search />
	               <AboutList categoryMusic={this.state.curentCategory}/>
	         				{this.openCategory()}
              </div>
            </div>

        </div>


    );

  }

		openCategory = () => {
			console.log("oppppppeeeeeeeeeeeeennnnnnnnnnnnnnnnn");

			const category = this.state.curentCategory
			if(category === 'myMysic'){
				return  <MusicList/>
			}else if (category === 'playList') {
				return <PlayList />
			}else if (category === 'recommend') {
				return <Recommend/>
			}

		}

}

export default App;
