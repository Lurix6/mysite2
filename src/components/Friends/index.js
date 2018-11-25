import React, { Component } from 'react'
import FriendElement from './FriendElement'
import {connect} from 'react-redux'
import {filterActiveFriends} from '../../selectors'
import {changeFilterFriends} from '../../AC'
import './style.css'

class Friends extends Component {
  constructor(props){
    super(props)

    this.state = {
      moreFilters: false,
      sex: "all",
      city: '',
      from: '13',
      to: '35'
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
            <div id='friendsFiltersTwo'><div onClick={this.openParametrs}>Параметри</div><img id='parametersFilters' src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-down-01-128.png' /></div>
          </div>
          <hr />
          {this.state.moreFilters ? this.moreFilters() : null}
          <div className='friedsList'>
            <ul>
                { friendsElemet }
            </ul>
          </div>
        </div>

    );
  }

  moreFilters = () =>{
    return <div id="moreFilters">
          <div><p>Місто</p><input type='text' value={this.state.city} /></div>
          <div><p>Стать</p><select onChange={this.changeSex}><option value="all">Будь яка</option><option value="male">Чловік</option><option value="female">Жінка</option></select></div>
          <div><p>Вік:</p><p>від</p><input min="0" max="100" type="number" defaultValue="13" onChange={this.changeFrom}/><p id='toP'>до</p><input id='to' type="number" min="0" max="100" defaultValue="45" onChange={this.changeTo}/></div>
      </div>
  }

  openParametrs = () => {
      this.setState({
        moreFilters: !this.state.moreFilters
      })
      console.log(this.state.moreFilters);
  }

  changeTo = (ev) =>{
    this.setState({
      from: ev.target.value
    })

    console.log(this.state);
  }

  changeFrom = (ev) =>{
    this.setState({
      to: ev.target.value
    })
    console.log(this.state);
  }

  changeSex = (ev) => {
    this.setState({
      sex: ev.target.value
    })
  }
//////////////////////////////////////////////////////////////////////////

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
