import React from 'react'
import {Link} from 'react-router-dom'
import '../style/Menu.css'

class Menu extends React.Component {

  render() {

    return (
      <div className="menu">
        <div id="home"><img src="/assets/img/music/home.png" alt=""/><Link to ="/user">Моя сторінка</Link></div>
        <div id="news"><img src="/assets/img/music/news.png" alt=""/>Новини</div>
        <div id="message"><img src="/assets/img/music/message.png" alt=""/>Повідомлення</div>
        <div id="friens"><img src="/assets/img/music/friends.png" alt=""/>Друзі</div>
        <div id="band"><img src="/assets/img/music/groups.png" alt=""/>Грути</div>
        <div id="foto"><img src="/assets/img/music/photos.png" alt=""/>Фотографії</div>
        <div id="music"><img src="/assets/img/music/music.png" alt=""/><Link to ="/music/myList">Музика</Link></div>
        <div id="video"><img src="/assets/img/music/videos.png" alt=""/>Відео</div>
      </div>
    )

  }

}

export default Menu
