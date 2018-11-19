import React, { Component } from 'react'
import FriendElement from './FriendElement'
import {connect} from 'react-redux'
import {filterActiveFriends} from '../../selectors'
import {changeFilterFriends} from '../../AC'
import './style.css'

class Friends extends Component {


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
              <div onClick={this.handleAllFriends} className={this.props.friendFilter.online ? 'activeFriends' : null}>Усі друзі<span>{this.props.friensList.length}</span></div>
              <div onClick={this.handleActiveFriends} className={this.props.friendFilter.online ? null : 'activeFriends' }>Друзі онлайн<span>14</span></div>
            </div>
            <button id='findFriends'>
              Знайти друів
            </button>
          </div>
          <hr />
          <div id='searchFriendName'>
            <img src='https://www.freeiconspng.com/uploads/search-icon-png-18.png' />
            <input id='searchInputName' type='text' autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Почніть вводити ім'я друга" onChange={this.handlefriendFilterName} />
            <div id='friendsFiltersTwo'><div>Параметри</div><img id='parametersFilters' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png' /></div>
          </div>
          <hr />
          <div className='friedsList'>
            <ul>
                { friendsElemet }
            </ul>
          </div>
        </div>

    );
  }

  handlefriendFilterName = (ev) => {
    this.props.changeFilterFriends({...this.props.friendFilter,name: ev.target.value})
  }

  handleAllFriends = () => {
    this.props.changeFilterFriends({...this.props.friendFilter,online: true })
  }

  handleActiveFriends = () => {
    this.props.changeFilterFriends({...this.props.friendFilter,online: false })
  }

}

export default connect(state => ({
  friensList : filterActiveFriends(state),
  friendFilter : state.friendsFilter
}), {changeFilterFriends})(Friends)
