import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import {connect} from 'react-redux'


class CurentMusic extends React.Component{



  render(){
    const {curentElement, musics} = this.props

    console.log(curentElement.title);
    const musicElement = curentElement



    return<div className = "curentMusic">
              <ReactAudioPlayer
                  src={musicElement.url_link}
                  // autoPlay
                  controls
                  loop
                  // muted
              />
                <div id="about_current_music">
                  <img src={musicElement.icon === null ? "assets/img/music/default_music_img.png" : musicElement.icon}   />
                    <div>
                        <p>{musicElement.title}</p>
                        <p>{musicElement.executor}</p>
                    </div>
                </div>

      </div>
    }
}

export default connect(state => ({
  musics: state.musics,
  curentElement: state.curentElement
}))(CurentMusic)


/*    <div>
        <img id="play" src="assets/img/music/play.png" alt="" />
        <div id="next_previous">
          <img src="assets/img/music/previous-track.png" alt="" />
          <img src="assets/img/music/next-track.png" alt="" />
        </div>
        <div className="about_current_music">
          <img src={musicElement[0].icon} alt="" />
          <div>
            <p id="current_music_title">{musicElement[0].executor}</p>
            <p id="current_music_executor">{musicElement[0].title}</p>
          </div>
        </div>
    </div>
    <div id="curentTime">
          {musicElement[0].full_time}
    </div>

    */
