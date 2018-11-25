import React from 'react'
import '../style/header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

 class Header extends React.Component {

  render(){

    const style = this.props.loginProfil.siteStyle
    console.log('header', style);

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
            <div className="header_item headerButton"><Link to='/profil/settings?category=general'><img src="https://www.freeiconspng.com/uploads/settings-icon-16.png" alt=""/></Link></div>
          <div className="header_item headerButton"><Link to='/'><img src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/012_power-512.png" alt=""/></Link></div>
        </div>
      </div>

    )

  }

}

export default connect(state => ({
  loginProfil : state.loginProfil
}))(Header)
