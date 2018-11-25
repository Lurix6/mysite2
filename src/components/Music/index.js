import React from 'react'
import CurentMusic from './CurentMusic'
import Category from './Category'
import AboutList from './AboutList'
import MusicList from './MusicList'
import PlayList from'./PlayList'
import Search from './Search'
import Recommend from './Recommend'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Music extends React.Component{

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
          switch (this.props.curentMusicCategory.defaultMusicCategory) {
            case 'playList': return <div><PlayList /></div>
            case 'recommend': return <div><Recommend /></div>
            case 'myList': return <div><MusicList /></div>

          }
    }
}

export default connect(state =>({
    curentMusicCategory: state.curentElement
}))(Music)
