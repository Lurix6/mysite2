import React, { Component } from 'react';
import './style/App.css';
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'
import Search from './Search'
import Recommend from './Recommend'
import {Route} from 'react-router-dom'

class App extends Component {

  render() {

    return (
        <div className ="musicBlock">
            <CurentMusic/>
            <div className="fullListMusic">
              <Category/>
              <hr />
              <div className="showlist">
              	<Search />
	         				{this.openCategory()}
              </div>
            </div>

        </div>


    );

  }

		openCategory = () => {
			console.log("oppppppeeeeeeeeeeeeennnnnnnnnnnnnnnnn");
			return(
				<div>
					<Route path='/music/playList' component={PlayList} />
					<Route path='/music/recommend' component={Recommend} />
					<Route path='/music/myMysic' exacte component={MusicList} />
				</div>
			)

		}

}

export default App;
