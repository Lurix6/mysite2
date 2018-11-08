import React from 'react'
import '../style/header.css'

export default class extends React.Component {

  render(){
      return (
      <div className="header">
        <div className="header_section">
          <div className="logo">
            <a href="index.html">LOGO</a>
          </div>
          <div className="header_item headerButton"><img src="/assets/img/header/earth.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/magnifying-glass-finder.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/friends.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/console.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/star.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/youtube-play-button.png" alt=""/></div>
          <div className="header_item headerButton"><img src="/assets/img/header/headphones.png" alt=""/>
        </div>

        </div>

        <div className="header_section_half">
          <div><a href="upload_rating.html">Update Your rating</a>
          </div>
        </div>

        <div className="header_section_two">
          <div className="header_item headerButton"><a href="check_in.html"><img src="/assets/img/header/settings-gears.png" alt=""/></a></div>
          <div className="header_item headerButton"><img src="/assets/img/header/logout.png" alt=""/></div>
        </div>
      </div>

    )

  }

}
