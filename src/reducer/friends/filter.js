import {filterForFriends} from '../../components/DB'
import {CHANGE_FILTERS_FRIEND} from '../../constants'

export default (filterState = filterForFriends, action) => {
  const {type, payload} = action
  console.log('-------------------------',{filterState});
  switch (type) {
    case CHANGE_FILTERS_FRIEND: return {...filterState, active: payload.active}
  }
  return filterState
}
