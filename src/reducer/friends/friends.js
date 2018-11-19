import {Profils} from '../../components/DB'

export default (accountState = Profils, action) => {
  const {type, payload} = action
  switch (type) {
    case 'hello': return accountState


  }

  return accountState
}
