import {noveltySongs} from '../../components/DB'

export default (state = noveltySongs, action) => {
  const {type, payload} = action
  switch (type) {
    case 'exemple':

        return state
  }
  return state
}
