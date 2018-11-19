import React from 'react'
import '../style/header.css'
import {Link} from 'react-router-dom'

export default class extends React.Component {

  render(){

    const style = {background: 'linear-gradient(to top,#7f7f7f,#5b5b5b)'}


      return (
      <div className="header" style={style}>
        <div className="header_section">
          <div className="logo">
            <a href="">LOGO</a>
          </div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/globe-7-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/search-13-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/group-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/joystick-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/star-5-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/start-xxl.png" alt=""/></div>
          <div className="header_item headerButton"><img src="https://www.iconsdb.com/icons/preview/white/headphones-3-xxl.png" alt=""/>
        </div>

        </div>

        <div className="header_section_half">
          <div><a href="">Update Your rating</a>
          </div>
        </div>

        <div className="header_section_two">
            <div className="header_item headerButton"><Link to='/settings?category=general'><img src="https://www.iconsdb.com/icons/preview/white/settings-5-xxl.png" alt=""/></Link></div>
          <div className="header_item headerButton"><a href=""><img src="https://www.iconsdb.com/icons/preview/white/logout-xxl.png" alt=""/></a></div>
        </div>
      </div>

    )

  }

}
