import React from 'react'
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'
import Search from './Search'
import Recommend from './Recommend'
import {Route} from 'react-router-dom'

export default class Music extends React.Component{

    render(){

      return(
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
      )
    }
    
    openCategory = () => {
      return(
        <div>
          <Route path='/music/playList' component={PlayList} />
          <Route path='/music/recommend' component={Recommend} />
          <Route path='/music/myList' component={MusicList} />
        </div>
      )

    }
}
