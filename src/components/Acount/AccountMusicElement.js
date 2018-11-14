import React from 'react'
import {connect} from 'react-redux'

class AccountMusicElement extends React.Component{

  render(){

    const musicObj = this.getMusicObjectWithID()



    return(<div>
                <div id="play_music"></div>
                <div id="author_music">
                  {musicObj[0].executor} -
                </div>
                <div className="name_music">
                  - {musicObj[0].title}
                </div>
            </div>)


    }


    getMusicObjectWithID = (id) => {
      return this.props.allMusic.filter(element => element.id === this.props.id)
    }
}

export default connect(state => ({
  allMusic : state.allMusic
}))(AccountMusicElement)
