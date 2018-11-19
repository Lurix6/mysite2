import {CHANGE_FILTERS_FRIEND} from '../../constants'

const defaultFilterFriends = {
		name:null,
		online: true,
		city:null

}

export default (filterState = defaultFilterFriends, action) => {
  const {type, payload} = action
  switch (type) {
    case CHANGE_FILTERS_FRIEND: return payload.filter
  }
  return filterState
}
