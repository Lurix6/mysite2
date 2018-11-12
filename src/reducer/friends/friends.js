import {Account} from '../../components/DB'

export default (accountState = Account, action) => {
  const {type, payload} = action
  switch (type) {
    case 'hello': return accountState


  }

  return accountState
}
