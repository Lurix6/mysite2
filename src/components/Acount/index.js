import React, { Component } from 'react'
import '../style/User.css'
import {connect} from 'react-redux'
import AccountMusicElement from './AccountMusicElement'


class App extends Component {

  render(){

    let selectedAccount
    const location = this.props.location
    if (location.pathname === "/profil/myProfile") {
      selectedAccount = this.props.mainProfile
      console.log(selectedAccount);
    }else {
      selectedAccount = this.getAccountById(location)


    }



    // const musicEelements = this.getFirstThreeElement(selectedAccount.musicList).map(element => <li><AccountMusicElement id={element} /></li>)

    return (
        <div className='userRoot'>
          <div className="main_site_body_container">
            <div className="your_block">
              <div className="avatar">
                <img src={selectedAccount.img} alt="" />
              </div>
            </div>
            <div className="wall">
              <div className="about_me">
                <div className="name_and_status">
                  <p className="name">{selectedAccount.firstName} {selectedAccount.lastName}</p>
                  <p >{selectedAccount.status}</p>
                  <p className="status">{selectedAccount.online ? 'Active' : 'Ofline'}</p>
                </div>
                <div className="private_inf">
                  <div className="my_date">
                    <div>
                      <aside>Країна:</aside>
                      <div>{selectedAccount.personalDate.country}</div>
                    </div>

                    <div>
                      <aside>Місто:</aside>
                      <div>{selectedAccount.personalDate.city}</div>
                    </div>

                    <div>
                      <aside>Мова:</aside>
                      <div>{selectedAccount.personalDate.language}</div>
                    </div>

                    <div>
                      <aside>День народження:</aside>
                      <div>{selectedAccount.personalDate.birthday}</div>
                    </div>

                  </div>
                <div className="my_rating">
                  <p>Рейтинг</p>
                  <p id="rating">{selectedAccount.rating}</p>
                </div>
              </div>
          </div>
              <div id="show_detail">
                <div>Показати детальну інформацію</div>
                </div>
          </div>
          </div>
            <div id="additional">
              <div className="my_music">
                  <div id="current_music" >
                    <div>
                      <p><span>{selectedAccount.musicList.length} </span>Аудіозаписи</p>
                    </div>
                    <div>
                      <p>Усі</p>
                    </div>
                  </div>

                <div className="list_music">
                </div>
              </div>
              </div>

              <div className="records_or_all">
                  <p>Записи</p>
                  <p id="all">Всі</p>
              </div>
            </div>

    );
  }

  getAccountById = (location) => {
      if (location.pathname === '/profil/my') {
          console.log('main profile ',this.props.mainProfile, location.pathname === '/profil/my');
          return this.props.mainProfile
      }
      const id = location.pathname.replace('/profil/id/', '')
      const test = this.props.allProfile.filter(element => element.id === id)
      return test[0]

  }

  getFirstThreeElement = (list) => {
      if (list.length <= 3 && list.length !== 0)
          return list
      if (list.length === 0)
          return false
      if (list.length > 3){
        let result = []

        for(var i = 0 ; i < 3 ;i++){
          result.push(list[i])
        }


      return result
    }
  }

}

export default connect(state => ({
  selectedFriend : state.selectedFriend,
  mainProfile: state.loginProfil,
  allProfile: state.accounts
}))(App);
