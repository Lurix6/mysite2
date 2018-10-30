import React, { Component } from 'react';
import './style/App.css';
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'




class App extends Component {

	state = {
		curentCategoryMyMusic : true
	}

	updateCurentCategory = (value) => {
		this.setState({
			curentCategoryMyMusic : value
		})

	}


  render() {

    return (
        <div className ="musicBlock">
            <CurentMusic/>
            <div className="fullListMusic">
              <Category updateCurentCategory={this.updateCurentCategory} defaultCurentCategory ={this.curentCategoryMyMusic} />
              <hr />
              <div className="showlist">
                <div className="search">
                  <input type="text"
                    id="audio_search"
                    placeholder="Пошук за музикою" />
                  <button className="button_search">
                  </button>
                </div>
	               <AboutList categoryMusic={this.state.curentCategoryMyMusic}/>
	               {this.state.curentCategoryMyMusic ?  <MusicList/> : <PlayList />}

              </div>
            </div>

        </div>


    );

  }
}

export default App;
