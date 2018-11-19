import React, { Component } from 'react'
import FriendElement from './FriendElement'
import {connect} from 'react-redux'
import {filterActiveFriends} from '../../selectors'
import {changeFilterFriends} from '../../AC'
import './style.css'

class Friends extends Component {
  constructor(props) {
      super(props);


      this.state = {
        friendsFilter : props.friendsFilter
        }
    }

  render() {
    const friendsElemet = this.props.friensList.map(element => <li key={element.id}>
      <FriendElement
          element= {element}
      />
    </li> )

    return (
        <div id='friendsMainBlock'>
          <div id='friendsFiltersOne'>
            <div>
              <div onClick={this.handleAllFriends} className={this.state.friendsFilter.active ? 'activeFriends' : null}>Усі друзі<span>180</span></div>
              <div onClick={this.handleActiveFriends} className={this.state.friendsFilter.active ? null : 'activeFriends' }>Друзі онлайн<span>14</span></div>
            </div>
            <button id='findFriends'>
              Знайти друів
            </button>
          </div>
          <hr />
          <div id='searchFriendName'>
            <img src='https://www.freeiconspng.com/uploads/search-icon-png-18.png' />
            <input id='searchInputName' type='text' autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Почніть вводити ім'я друга" />
            <div id='friendsFiltersTwo'><div>Параметри</div><img id='parametersFilters' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png' /></div>
          </div>
          <hr />
          <div className='friedsList'>
            <ul>
                {this.state.friendsFilter.active ? friendsElemet : null}
            </ul>
          </div>
        </div>

    );
  }

  handleAllFriends = () => {
    this.props.changeFilterFriends(true)
  }

  handleActiveFriends = () => {
    this.props.changeFilterFriends(false)
  }

}

export default connect(state => ({
  friensList : filterActiveFriends(state),
  friendsFilter : state.friendsFilter
}), {changeFilterFriends})(Friends)
